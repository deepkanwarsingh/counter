import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, chaiCounter] = useState(15);

  // let counter =15;

  const addvalue = () => {
    // console.log("value added",Math.random());
    // counter=counter+1;

    if(counter<20){
      chaiCounter(counter+1);
    }
   
    console.log(counter);
  }

  const removeValue =()=>{

    if(counter>0){
      chaiCounter(counter-1);
    }
  }

  return (
    <>

   
  <h1>hello world:{counter}</h1>
  <h2>counter value:{counter}</h2>

  <button onClick={addvalue}>add value:{counter}</button><br/>
  <button onClick={removeValue}>remove value:{counter}</button>

  </>


  )
}

export default App
