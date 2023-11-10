const mongoose = require('mongoose');
const { isEmail, isStrongPassword } = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
},{timestamps:true});

userSchema.statics.signup = async function(userName,email,password){
    //validation
    if(!userName || !email || !password){
        throw new Error('All fileds must be Filled!');
    }
    const exist = await this.findOne({userName});
    if(exist){
        throw new Error('That UserName Already Exists!')
    }

    if(!isEmail(email)){
        throw new Error('That is Not a valid Email')
    }
    const match = await this.findOne({email});
    if(match){
        throw new Error('That Email is Already In use!')
    }
  
    if(!isStrongPassword(password)){
        throw new Error('That is Not a Strong Password')
    }
    
    // if passsword don't exist in the db so as to prevent re-hshing we then hash the  password value
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({userName,email,password:hash});
    if(!user){
        throw new Error('Error Occurred While Creating User')
    }
    return user; //return the user created
}

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw new Error('All fileds must be Filled!');
    }
    if(!isEmail(email)){
        throw new Error('That is Not a valid Email')
    }
    const user = await this.findOne({email}).select('+password');
    if(!user){
        throw new Error('Invalid Email!')
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match){
        throw new Error('Invalid Password!');
    }
    return user;
}

const User = mongoose.model('user',userSchema);
module.exports = User;
