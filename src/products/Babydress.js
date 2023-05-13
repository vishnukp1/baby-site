import React, { useContext } from 'react'
import { babyshop } from '../context'
import "../Pages/Navbar.css"
import { Button, Card } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'

function Babydress() {
  const data=useContext(babyshop)
  const {state}=data
  const navigate=useNavigate()
  const dress=state.filter((item)=>item.type==="dress")


  return (
    <div className='topdiv d-flex'>
    
{dress.map((post) => (
  <Card className='products' style={{ width: '18rem'}}>
   <Card.Img className='cardimg' variant="top" src={post.productImage}  />
   <Card.Body>
     <Card.Title>{post.price}</Card.Title>
     <Card.Text>
     {post.productName}
     </Card.Text>
    <Button variant="primary" onClick={()=>navigate(`/cart/${post.id}`)}>view item</Button>

   </Card.Body>
 </Card>
))}
      

      
       

      </div>
  )
}

export default Babydress