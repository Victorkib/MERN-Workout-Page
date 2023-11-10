import { useState, useContext } from 'react';
import { IsloggedInContext } from '../context/IsLoggedInContextProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { dispatch, nameFunction } = useContext(IsloggedInContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3500/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        headers: { 'Content-Type': 'Application/json' },
      });
      const json = await response.json();
      // console.log(json.userName);
      nameFunction(json.userName);

      if (response.ok) {
        setEmail('');
        setPassword('');
        setError(null);
        dispatch({ type: 'LOGGED-IN' });
        navigate('/');
      }
      if (!response.ok) {
        setError(json.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleClick}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
