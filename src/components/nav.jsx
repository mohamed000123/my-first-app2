import styles from "../styles/nav.module.css"
import { Link } from "react-router-dom";
export const NavBar = ()=>{
   return (
    <ul className={styles.btn}>
      <Link to="/" style={{marginRight:"20px"}}>
      Homee
      </Link>
      <Link to="/about" style={{marginRight:"20px"}}>
      aboutt
      </Link>
      <Link to="/products">
      productss
      </Link>
    </ul>
   ) 
} 

