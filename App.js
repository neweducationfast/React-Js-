import './App.css';
import React from 'react';
import { useState } from 'react';
//Even Handline css module 
function App() {
  let saveData=()=>{
    prompt("Data Saved");
  }
  let addData=(a,b)=>{
    alert(a+b);
  }
  //statemengemnt in react
  let [n,setN]=useState(1);
  let increment=()=>{
    setN(n+1);
    
  }
   
  return (
    <div className="App">
      <button className='adddata' onClick={()=>addData(20,30)}>Add Data</button>'
      
      <button className='btn' onClick={saveData}>Save</button>
      <button className='increment' onClick={increment}>Increment</button>
      {n}
    
      </div>
  );
}


export default App;