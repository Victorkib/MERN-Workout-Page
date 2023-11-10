const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//create Token
const maxAge = 3*24*60*60;
const createToken = (_id)=>{
    return jwt.sign({id:_id},process.env.SECRET,{
        expiresIn:maxAge
    })
}


//signup post
module.exports.signup_post = async (req,res)=>{
    const { userName, email, password } = req.body;
    try{
        const user = await User.signup(userName,email,password);
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge:maxAge*1000,httpOnly:true}).status(200).json({userName:user.userName});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

//login post
module.exports.login_post = async (req,res)=>{
    const { email, password } = req.body;
    try{
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge:maxAge*1000,httpOnly:true}).status(200).json({userName:user.userName});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}
//isLoggedIn get
module.exports.isloggedIn_get = async (req,res)=>{
    const token = req.cookies.jwt;
    if(!token){
        return res.json(false)
    }
    const validate = jwt.verify(token,process.env.SECRET);
    if(!validate){
        return res.json(false);
    }
    const user = await User.findById(validate.id).select('userName')
    if(!user){
        return res.json(false);
    }
    // console.log(user.userName);
    res.json({user:user.userName,value:true});
}

//logout get
module.exports.logout_get = async (req,res)=>{
    res.status(200).cookie('jwt','',{maxAge: new Date(0)}).json(false);
}