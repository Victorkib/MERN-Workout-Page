import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContextProvider";


const WorkoutForm = () => {
    const [ title, setTitle ] = useState('');
    const [ reps, setReps ] = useState('');
    const [ load, setLoad ] = useState('');
    const [ error, setError ] = useState(null);
    const [ success, setSuccess ] = useState(null);
    const { dispatch } = useContext(WorkoutContext);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(title,reps,load);
        const response = await fetch('http://localhost:3500/api/workouts/',{
            method:'POST',
            body:JSON.stringify({title,reps,load}),
            credentials:'include',
            headers:{'Content-Type':'Application/json'}
        })
        const json = await response.json()
        // console.log(json);
        if(!response.ok){
            setError(json.error);
            setSuccess(null);
        }
        if(response.ok){
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            setSuccess('Workout Added!');
            setTimeout(()=>{
                setSuccess(null);
            },1000)
            dispatch({type:'ADD-WORKOUT',payload:json})
        }
        
    }
    
    return (
        <div className="workout-form ">
           
            <h2>Add Workout</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Reps Done:</label>
                <input 
                type="number"
                value={reps}
                onChange={(e)=>setReps(e.target.value)}
                />
                <label>Load(Kg):</label>
                <input 
                type="number"
                value={load}
                onChange={(e)=>setLoad(e.target.value)}
                />
                <button>Add-Workout</button>
                { error && <div className="error">{error}</div> }
                { success && <h4 className="success">{success}</h4> }
            </form>
        </div>
    );
}
 
export default WorkoutForm;