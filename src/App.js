
import { useState } from 'react';
import './App.css';

function App() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  function UsernameChange(event){

    var Uservalue = event.target.value;

    setUsername(Uservalue);

  }

  function PasswordChange(event){

    var PassValue = event.target.value;
    
    setPassword(PassValue);

  }

  function login(){

    if (Username == "" || Password == "" ){
      alert("Please enter your credentials!");
    }
    else {
      alert("Username " + Username + " & Password " + Password);

      setPassword("");
      setUsername("");
      
    }

  }

  return (
    <div className='LoginSection' >
      <h1>Login</h1><br></br>
      <input value={Username} id="fname" type={"text"} placeholder="Username" onChange={UsernameChange}></input><br></br>
      <input value={Password} type={"password"} placeholder="Password" onChange={PasswordChange} ></input><br></br>
      <button type={"submit"} onClick={login} >Login</button>
    </div>
  );
}

export default App;

