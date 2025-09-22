import './App.css';
import {  useEffect, useState } from 'react';

function App() {
  const [count , setCount] = useState(0);
  let increment = ()=>{
    setCount(count+1);
  }

  let decrement = ()=>{
    setCount(count-1);
  }
  useEffect(()=>{
    if(count<0){
     let timer= setTimeout(() => {
        setCount(0);
      }, 2000);
        //clearup function 
    return()=>{
      clearTimeout(timer);
    }
    }
  
      
  },[count]);
;
  return (
    <div className="App">
       <div className='counter'>
      <h1 className='count'>{count}</h1>
      <button className='btn' onClick={increment}>Increment</button>
      <button className='btn' onClick={decrement}>Decrement</button>
     </div>
    </div>
  );
 
}

export default App;
