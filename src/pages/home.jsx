import { Footer } from "../components/footer";
import { UseRefComponent } from "../components/useRefComponent";
import { useState, useEffect } from "react";
import { Products } from "../components/products";
import { useFetch } from "../custom hooks/useFetch";
import Accordion from "react-bootstrap/Accordion";
// import {Accordion} from 'react-bootstrap';
const Home = () => {
  const products = [
    { id: 1, name: "shoes", price: 10045 },
    { id: 2, name: "lap", price: 101 },
    { id: 3, name: "mobile", price: 90 },
    { id: 4, name: "book", price: 22 },
  ];
  const [userName, setUserName] = useState("ahmed");
  const [number, setNumber] = useState(0);

  function handelNameChange() {
    setUserName(userName + 1);
    // console.log(userName);
  }
  function handelNumber() {
    setNumber(number + 1);
  }
  let fetchData = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      <button onClick={handelNameChange} className="btn btn-primary m-3">
        name
      </button>
      <button onClick={handelNumber} className="btn btn-dark">
        counter
      </button>
      <h1>{userName}</h1>
      <Products products={products} />
      <UseRefComponent />
      {/*  */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            body
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            home
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/*  */}
      <Footer />
    </>
  );
};

export default Home;
