import React,{useContext} from 'react'
import { userContext } from '../../pages/about'
const C = () => {
    const userUser = useContext(userContext)
    console.log();
    
  return (
    <div style={{border:"2px solid black",padding:"20px"}}>
    <h1  >c comp</h1>
    <p> {userUser.user.name} </p>
    </div>

  )
}

export default C