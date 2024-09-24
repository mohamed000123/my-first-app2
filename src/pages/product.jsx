import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../custom hooks/useFetch'
import  Toast  from 'react-bootstrap/Toast'
import Spinner from 'react-bootstrap/Spinner';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Product = () => {
  const   {id} = useParams()
  const product = useFetch(`https://fakestoreapi.com/products/${id}`)
  return (
    <>
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <h1>{product.category}</h1>
    <h1>{product.title}</h1>
    <h1>{product.price}</h1>
    <img src={product.image} style={{width:"500px",height:"500px"}}></img>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    </>
  )
}

export default Product