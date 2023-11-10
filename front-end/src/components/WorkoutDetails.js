import { useContext, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContextProvider';
import { format, formatDistanceToNow } from 'date-fns'; // Import the format function
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMMM dd, yyyy'); // Format the date
  };
  const formatRelativeTime = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true }); // Format relative time };
  };
  const handleClick = async () => {
    const response = await fetch(
      'http://localhost:3500/api/workouts/' + workout._id,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      console.log('Workout Deleted!');
      dispatch({ type: 'DELETE-WORKOUT', payload: json });
      setError(null);
    }
  };

  return (
    <div className="workout-details">
      <p>Workout Title: {workout.title}</p>
      <p>Workout Reps: {workout.reps}</p>
      <p>Workout Load(kg): {workout.load}</p>
      <div className="time">
        <p>Created At:{formatDate(workout.createdAt)} </p>{' '}
        {/* Use formatDate */}
        <p> {formatRelativeTime(workout.createdAt)}</p> {/* Use formatDate */}
      </div>
      <button onClick={handleClick}>Delete</button>
      <Link to={`/workouts/edit/${workout._id}`}>
        <AiOutlineEdit className="text-2xl hover:bg-black bg-pink-400 text-red-600"></AiOutlineEdit>
      </Link>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WorkoutDetails;
