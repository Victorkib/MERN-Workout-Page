import { useContext, useEffect, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContextProvider';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { IsloggedInContext } from '../context/IsLoggedInContextProvider';

const Home = () => {
  const { workouts, dispatch } = useContext(WorkoutContext);
  const { name } = useContext(IsloggedInContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3500/api/workouts/', {
          credentials: 'include',
        });

        if (!response.ok) {
          const json = await response.json();
          throw new Error(json.error);
        }

        const json = await response.json();
        await dispatch({ type: 'SET-WORKOUTS', payload: json });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [dispatch]);
  if (workouts === null) {
    return (
      <div className="boc">
        <div className="custom-loader"></div>
      </div>
    );
  }

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}

      {workouts.length > 0 ? (
        <>
          <p className="loading">
            Welcome {name && <span className="username">{name}</span>}. You have{' '}
            {workouts.length} workouts to display 💪.
          </p>
          {workouts.map((workout) => (
            <div className="workouts" key={workout._id}>
              <WorkoutDetails workout={workout} />
            </div>
          ))}
        </>
      ) : (
        <div className="nothing">
          <p>
            {' '}
            Sorry {name && <span className="username">{name}</span>}, You
            currently have {workouts.length} workouts ☹️.
          </p>
          <p>Add Your Workouts Below!</p>
          <WorkoutForm />
        </div>
      )}
    </div>
  );
};

export default Home;
