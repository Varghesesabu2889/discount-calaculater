import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Body() {
  const[price,setPrice]=useState(0)
  const[discount,setDiscount]=useState(0)
  const[profit,setProfit]=useState(0)
  const[reduction,setReduction]=useState(0)

  const calculate = (e) =>{
   if(price === 0 || discount === 0)
   {
    alert("please enter the values")
   }
   else{
    const output = (price*discount)/100
    setProfit(output)
    const newAmount = price-output
    setReduction(newAmount)
   }
  }

  const reset = () =>{
    setDiscount(0)
    setPrice(0)
    setProfit(0)
    setReduction(0)
  }
  return (
    <div className='body'>
    <div className="content">

    
      <div className="details">
       
       <div className="response">
          <div className="before">
              <h5>Actual <br /> Price  <span style={{color:'yellow',fontSize:'25px'}}>₹:{price}</span></h5>
          </div>
          <div className="after">
          <h5>Your <br /> Savings <span style={{color:'red',fontSize:'25px'}}>₹:{profit}</span></h5>
          </div>
       </div>

      <div className="form">
       <form >
      <TextField value={price || ""} onChange={(e)=>setPrice(e.target.value)} className='form-control'  style={{marginBottom:'20px'}} id="outlined-basic" label="Enter Amount" variant="standard" />
      <TextField value={discount || ""}  onChange={(e)=>setDiscount(e.target.value)} className='form-control' id="outlined-basic" label="Enter Discount %" variant="standard" />
      <div className="button">
      <Button onClick={calculate} style={{backgroundColor:'blue'}} className='me-4' variant="contained">Calculate</Button>
      <Button onClick={reset} style={{backgroundColor:'chocolate'}}  variant="contained">Clear</Button>
      </div>
      </form>
      </div>
      <div className="result">
          <h3 className='text-center' style={{color:'white'}}>Net Amount <br /> <span className='span' style={{color:'blue',fontSize:'70px',fontWeight:'700'}} >₹: {reduction}</span> </h3>
      </div>
  
      </div>
    </div>
  </div>
  )
}

export default Body

































