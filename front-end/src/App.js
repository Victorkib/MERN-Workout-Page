import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import About from './pages/About';
import WorkoutForm from './components/WorkoutForm';
import { useContext, useState } from 'react';
import { IsloggedInContext } from './context/IsLoggedInContextProvider';
import Services from './pages/Services';
import LandingPage from './pages/LandingPage';
import EditForm from './pages/EditForm';

function App() {
  const { isLoggedin } = useContext(IsloggedInContext);
  const [welcome, setWelcome] = useState(null);
  if (!welcome) {
    setWelcome('Not Found. Welcome Though');
    setTimeout(() => {
      setWelcome(null);
    }, 3000);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {isLoggedin && (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/workouts" element={<Home />} />
              <Route path="/workouts/edit/:id" element={<EditForm />} />
              <Route path="/addWorkout" element={<WorkoutForm />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </>
        )}
        {!isLoggedin && (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Login />}>
                {welcome && <>{welcome}</>}
              </Route>
            </Routes>
          </>
        )}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
