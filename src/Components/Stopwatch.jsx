import React, { useEffect, useState } from 'react';
import"./Stopwatch.css"
const Stopwatch = () => {
const[time,settime]=useState(0)
const[timeon,setTimeOn]=useState(false)


useEffect(() => {
let interval=null;

if(timeon){
interval=setInterval(()=>{
    settime(time=>time+10)
},10)
}else{
    clearInterval(interval)
}
  return()=>clearInterval(interval)
}, [timeon]);


  return (
    <div className='stopwatch-container'>
         <div className='heading'>
                  <h4>STOPWATCH</h4>
              </div>
   <div className="timer-box">
   <h1>{("0"+Math.floor((time/60000)%60)).slice(-2)}m:{("0"+Math.floor((time/1000)%60)).slice(-2)}s:{(("0"+(time/10)%100)).slice(-2)}ms</h1>
      
   </div>
   <div className='stopwatchbtn'>
       <button  onClick={()=>setTimeOn(true)}>START</button>
       <button onClick={()=>setTimeOn(false)}>PAUSH</button>
       <button onClick={()=>settime(0)}>RESET</button>
   </div>
    </div>
  );
}

export default Stopwatch;
