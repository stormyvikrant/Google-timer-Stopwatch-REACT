import React, { useEffect, useState } from 'react';
import "./Timer.css"




const Timer = () => {
const [input,setInput]=useState(0)
const[seconds,setSeconds]=useState(0)
const[minutes,SetMinutes]=useState(0);
const [time,setTime]=useState()
const addtime=()=>{
  setTime(input)
   setSeconds(0)
  SetMinutes(input)
  }

var timer;
useEffect(() => {
 
timer=setInterval(()=>{
  setSeconds(seconds-1);
  if(seconds===0){
    SetMinutes(minutes-1)
    setSeconds(10)

  }
},1000)
if(minutes===0 && seconds===0){
  clearInterval(timer)

}
return()=>clearInterval(timer)


});

const restart=()=>{
  setSeconds(0);
  SetMinutes(0);}

  const stop=()=>{
    clearInterval(timer)
  }
  return (
  
       
        
            <div className='timer-container'>
              <div className='heading'>
                  <h4>TIMER</h4>
              </div>
            
     <div className='input-box'>
      <input className='timerinput' type="number" onChange={(e)=>setInput(e.target.value)}  value={input}></input>

    <button className='go-btn' onClick={addtime}>GO</button>
</div>
              <h1>{timer}</h1>
              <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
              <button className='reset' onClick={restart}>Reset</button>
              <button className='stop' onClick={stop}>Stop</button>
            </div>

              
 
  );
}

export default Timer;
