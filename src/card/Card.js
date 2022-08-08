import React,{useContext} from 'react'
import "./card.css"
import { UserContext} from "../Context/Usecontext"
export default function Card(props) {
    

  const {color}=useContext(UserContext);
  return (
    <div>
  
  
      <div className="txn-history">
        
        <p className="txn-list">{props.content}<span  className={color ? "debit-positif" :"debit-amount"}>{props.price}</span></p>
      </div>
    </div>
  )
}
