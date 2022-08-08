import React,{useContext, useState}from 'react'
import './container.css'
import Card from '../card/Card'
import { UserContext} from "../Context/Usecontext"
import { Link } from 'react-router-dom'
export default function Container() {

    const {current,color,total}=useContext(UserContext);
   console.log(current)
   console.log(color)

  
  return (

<div>

    
    <div className='wallet-container'>
        <div className="amount">

    <img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet"  />
    <p>Total Balance</p>
       <p>{total}</p>
        </div>
    

    <div className="btn-group text-center">
    <Link to={{ pathname:"/add"}} >
<button  className="btn btn-outline-light" type="button" >Add Money</button>
</Link>
<button type="button" className="btn btn-outline-light">Widthdraw</button>
</div>
<p><b>History</b></p>
{current.map((item)=>
    <Card
    key={item.id}
    id={item.id}
    content={item.content}
    price={item.price}
    color={color}
    />
)}
    </div>


</div>







  )
}
