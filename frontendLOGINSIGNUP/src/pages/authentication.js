import React, { useState } from "react"
import axios from "axios"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"

export const Authentication = () => {
  return (
    <div className="authentication">
      <div className="form">
        <Register />
        <Login />
      </div>
    </div>
  )
};

export const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1>{label}</h1>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            className="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
  )
};

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post("http://localhost:4000/auth/register", { username, password });
      alert("Registration completed");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label={"Register"}
      onSubmit={onSubmit}
    />
  )
};

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [, setCookies] = useCookies(["access token"])
  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", { username, password });
      console.log(response)
      setCookies("access token", response.data.token)
      window.localStorage.setItem("userID", response.data.user)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label={"Login"}
      onSubmit={onSubmit}
    />
  )
};
