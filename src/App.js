import { useState } from "react";

//import "./styles.css";
function Message() {
  const [emailInput, setEmailInput]=useState('')
  const submitHandler=()=>{}
  return(
  <form onSubmit={submitHandler}>
    <h1>Get in Contact </h1>
    <input type='email' value={emailInput} placeholder='Your Email Address' ></input>
    <br></br>
    <br></br>
    
    <textarea value='' placeholder='Write Your Message...'/>
    <h1>Some Changes</h1>
  </form>);
}

export default function App() {
  return (
    <div className="App" style={{border: '1px solid black', margin: '16px', padding: '8px'}}>
      <Message/>
      
    </div>
  );
}
