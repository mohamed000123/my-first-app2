import { useRef, useState } from "react";
export const UseRefComponent = () => {
  const [x,setX] = useState(1)
  let y = useRef(1)
  let z = 1
  let title = useRef();
  const changeColor = ()=>{
    // title.current.style.color = "red"
    setX(x+1)
    z++
    y.current = y.current+1
    console.log("useRef value ",y.current);
    console.log("normal value",z);
    
  }
  
  let btn = useRef()
  return (
    <>
      <h1 ref={title}>{y.current}</h1>
      <button ref={btn} onClick={changeColor}>increment</button>
    </>
  );
};
