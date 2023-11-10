import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const WorkoutsReducer = (state,action)=>{
    switch(action.type){
        case 'SET-WORKOUTS':
            return {
                ...state,
                workouts:action.payload
            }
        case 'ADD-WORKOUT':
            return{
                ...state,
                workouts:[action.payload, ...state.workouts]
            }
        case 'DELETE-WORKOUT':
            return {
                ...state,
                workouts:state.workouts.filter((workout)=>workout._id !== action.payload._id)
            }
        default :
            return state;
    }
}
export const WorkoutContextProvider = ({children})=>{
    const [ state, dispatch ] = useReducer(WorkoutsReducer,{
        workouts:null
    })
    return(
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}