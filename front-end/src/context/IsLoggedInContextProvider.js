import { createContext, useEffect, useReducer, useState } from "react";


export const IsloggedInContext = createContext();
export const IsLoggedReducer = (state,action)=>{
    switch(action.type){
        case 'ISLOGED-IN':
            return{
                isLoggedin:action.payload
            }
        case 'LOGED-OUT':
            return{
                isLoggedin:false
            }
        case 'LOGGED-IN':
            return {
                isLoggedin:true
            }
        default:
            return state;
    }

}
export const IsloggedInContextProvider = ({children})=>{
  
    const [ state, dispatch ] = useReducer(IsLoggedReducer,{
        isLoggedin:null
    })
   const [ name, setName ] = useState('');
   const nameFunction = (name)=>{
    setName(name);
    // console.log(name);
   }
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('http://localhost:3500/api/users/isLoggedIn',{
              credentials:'include'
            });
            const json = await response.json();
            console.log( json.value,json.user);
            if(!json.value){
                dispatch({type:'ISLOGED-IN',payload:json.value});
            }
            if(json.value){
                dispatch({type:'LOGGED-IN',payload:json.value});
            }
            // if (json.value && json.user) {
            //     nameFunction(json.user)
            //   }
              
            nameFunction(json.user)
           
          };
        fetchData();
    },[dispatch,name])
    return(
        <IsloggedInContext.Provider value= {{...state,dispatch,name,nameFunction}}>
            {children}
        </IsloggedInContext.Provider>
    )
}