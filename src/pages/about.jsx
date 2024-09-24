import React, { useState, createContext } from 'react'
import A from '../components/about/a'
import { Outlet,Link } from 'react-router-dom'
export const userContext = createContext()
const About = () => {
    const [user,setUser]=useState({name:"ahmed",email:"ahmed.com"})
  return (
    <>
    <h1>about page</h1>
    <Link to="/about/complain" style={{marginRight:"20px"}}>
    complain
    </Link>
    <Link to="/about/feedback" style={{marginRight:"20px"}}>
    feedback
    </Link>

    <Outlet/>
    {/* <userContext.Provider value={{user,setUser}}>
        <A />
    </userContext.Provider> */}
    </>
  )
}

export default About