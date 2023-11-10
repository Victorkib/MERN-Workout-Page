import { Link } from 'react-router-dom';
const NotFound = () => {
    
    return ( 
        <div className="not-found">
            <h1>404! </h1>
            <h1>Not Found </h1>
            <p>Login or Signup Below </p>
            <ul>
                <Link to='/'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
            </ul>
        </div>
     );
}
 
export default NotFound;