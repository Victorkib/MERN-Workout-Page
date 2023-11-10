import { useContext } from "react";
import { Link } from "react-router-dom";
import { IsloggedInContext } from "../context/IsLoggedInContextProvider";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
  const { isLoggedin } = useContext(IsloggedInContext);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          
        <div className="mobile-btn">
                        <ion-icon name="grid"></ion-icon>
                    </div>
                    <div className="logo">
                        <img
                            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/logo.png"
                            alt=""
                        />
                    </div>
          <h1><i> TRIPLE 3</i></h1>
        </div>
        <div className="footer-links">
          <ul className="links">
            {isLoggedin && 
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/workouts">My-Workouts</Link></li>
                <li><Link to="/addWorkout">Add-Workout</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about-us">About-us</Link></li>
              </> 
            }
            {!isLoggedin && 
              <>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
              </> 
            }
            
          </ul>
        </div>
        <div className="footer-social">
          <ul className="links">
            <li><Link to="https://www.facebook.com/home.php" target="_blank"><FaFacebook /></Link></li>
            <li><Link to="https://twitter.com/" target="_blank"><FaTwitter/></Link></li>
            <li><Link to="https://www.instagram.com/" target="_blank"><FaInstagram /></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TRIPLE 3. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

