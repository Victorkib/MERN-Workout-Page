import { useState, useEffect } from 'react';
//import { WorkoutContext } from '../context/WorkoutContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3500/api/workouts/${id}`, {
        credentials: 'include',
      });
      const json = await response.json();
      if (!response.ok) {
        console.log(json.error);
      }
      console.log(json);
      setTitle(json.title);
      setReps(json.reps);
      setLoad(json.load);
      setOtherInfo(json.otherInfo);
    };
    fetchData();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    console.log(title, reps, load, otherInfo);
    const response = await fetch(`http://localhost:3500/api/workouts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title, reps, load, otherInfo }),
      credentials: 'include',
      headers: { 'Content-Type': 'Application/json' },
    });
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setError(json.error);
      setSuccess(null);
    }
    if (response.ok) {
      setTitle('');
      setReps('');
      setLoad('');
      setOtherInfo('');
      setError(null);
      setSuccess('Workout Editted!');
      setTimeout(() => {
        setSuccess(null);
      }, 1000);
      navigate('/workouts');
    }
  };

  return (
    <div className="workout-form ">
      <h2>Edit Workout</h2>

      <form onSubmit={handleEdit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Reps Done:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <label>Load(Kg):</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label>Other Info:</label>
        <textarea
          className="otherInfo"
          value={otherInfo}
          onChange={(e) => setOtherInfo(e.target.value)}
        ></textarea>
        <button>Edit</button>
        {error && <div className="error">{error}</div>}
        {success && <h4 className="success">{success}</h4>}
      </form>
    </div>
  );
};

export default EditForm;
