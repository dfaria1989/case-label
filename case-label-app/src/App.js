import './App.css';
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./index.css"

function App() {
  const adminUser = {
    email: "teste@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("");

  const Login = details => {
    if (details.email) {
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("aqui")
      setError("eror in login")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" })
  }

  return (
    <div className="App">
      {
        (user.email != "") ?
          (<div className="welcome">
            <h2>Logged in as a {user.email}  | <button onClick={Logout}>Log Out </button></h2>
          </div>)
          : (<LoginForm Login={Login} error={error} />)
      }
    </div>
  );
}

export default App;
