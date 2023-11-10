import { useState,useContext } from "react";
import { IsloggedInContext } from "../context/IsLoggedInContextProvider";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const {  dispatch,nameFunction } = useContext(IsloggedInContext);
    const navigate = useNavigate();

    const handleClick = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3500/api/users/signup',{
                method:'POST',
                body:JSON.stringify({userName,email,password}),
                credentials:'include',
                headers:{'Content-Type':'Application/json'}
            })
            const json = await response.json();
            // console.log(json.userName)
            nameFunction(json.userName);
            if(response.ok){
                setUserName('');
                setEmail('');
                setPassword('');
                setError(null);
                dispatch({type:'LOGGED-IN'})
                navigate('/');
            }
            if(!response.ok){
                setError(json.error);
            }
        }
        catch(err){
            setError(err.message);
        }
        
    }   

    return (
        <div className="Signup">
            <h2>Signup</h2>
            <form onSubmit={handleClick}>
                <label>UserName:</label>
                <input 
                type="text"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <label>Email:</label>
                <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button>Signup</button>
                { error && <div className="error">{error}</div> }
            </form>
        </div>
    );
}
 
export default Signup;