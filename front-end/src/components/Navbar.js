import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { IsloggedInContext } from "../context/IsLoggedInContextProvider";
import { WorkoutContext } from "../context/WorkoutContextProvider";


const Navbar = () => {
    const { isLoggedin, dispatch, name } = useContext(IsloggedInContext);
    const { dispatch:workoutDispatch } = useContext(WorkoutContext)
    const navigate = useNavigate();
 
    const handleClick = async()=>{
        const response = await fetch('http://localhost:3500/api/users/logout',{
            credentials:'include'
        });
        // const json = await response.json();
        // console.log(json);
        if(response.ok){
            dispatch({type:'LOGED-OUT'});
            workoutDispatch({type:'SET-WORKOUTS',payload:null})
            navigate('/');
        }
        if(!isLoggedin){
            navigate('/login');
        }
    }
   
    return (
        <div className="main">
           {/* Menu */}
           <div className="menu">
                <div className="container flex">
                    {/* Mobile Button */}
                    <div className="mobile-btn">
                        <ion-icon name="grid"></ion-icon>
                    </div>
                    <div className="logo">
                        <img
                            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/logo.png"
                            alt=""
                        />
                    </div>
                    {isLoggedin && (
                        <>
                            {name && <p className='user'>Welcome {name}</p>}
                        </>
                    )}
                  
                    <ul>
                        {isLoggedin && (
                            <>
                               
                                <Link to='/'>Home</Link>
                                <Link to='/workouts'>My-Workouts</Link>
                                <Link to='/addWorkout'>Add-Workout</Link>
                                <Link to="/about-us">About-us</Link>
                                <Link to="/services">Services</Link>
                                <Link to='/logout' onClick={handleClick}>Logout</Link>
                            </>
                        )}
                        {!isLoggedin && (
                            <>  
                                <Link to='/'>Home</Link>
                                <Link to='/signup'>Signup</Link>
                                <Link to='/login'>Login</Link>
                            </>
                        )}
                    </ul>
                    {/* <Link to="#" className="btn">Register</Link> */}
                </div>
            </div>
            {/* End Menu */}
        </div>
        
    );
}
 
export default Navbar;