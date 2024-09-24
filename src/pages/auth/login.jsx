import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/")
        }
      });
    const [useName,setUserName] = useState()
    const [password,setPassword] = useState()
    const handleLogin = ()=>{
       localStorage.setItem("token",JSON.stringify({name:useName,password:password}))
       navigate("/")
    }
    const handelPassword = (e)=>{        
        setPassword(e.target.value)
    }
    const handelName = (e)=>{
        setUserName(e.target.value)
    }
  return (
    <>
    <input placeholder='name' onChange={handelName}/>
    <input placeholder='password' onChange={handelPassword}/>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login