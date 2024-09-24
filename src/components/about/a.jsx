import React from 'react'
import B from './b'
const A = ({user}) => {
  return (
    <div>
    <h1 style={{border:"2px solid black",padding:"20px"}}>a comp</h1>
    <B user={user}/>
    </div>
  )
}

export default A