import { createContext,useEffect,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { number } from "yup";

export const  UserContext  = createContext()




export function UserContextProvider(props){
 

    const [color,SetColor]=useState(false);

    const [total,SetTotal]=useState(0);

    const [current,SetCurrent]=useState([{
        id:uuidv4(),
        content:"Payment to xyz shop",
        price:-100
    }]);




  useEffect(()=>{

    current.map((item)=>
    SetTotal(item.price+total)
    

   )

  },[current])





   
    const handleSubmit = (values) => {
      
    if (values.price < 0) {
        SetColor(false);
        
    }else{
        SetColor(true);
    }
        const newArr =[...current];
        
        
        newArr.push(values)
        SetCurrent(newArr)
        
      
        console.log("newss",newArr)
        

    };


    return (
        <UserContext.Provider  value={{current,color,handleSubmit,total}}>
             {props.children}
        </UserContext.Provider >
    
    )
}