import { useEffect, useState } from "react"

export const useFetch = (url)=>{
  const [response,setResponse] = useState([])
  useEffect(()=>{
   (async function (){
    let data = await fetch(url)
    data = await data.json()
    setResponse(data)
   })()
  },[])
  return response
}