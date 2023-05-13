import React, { useContext } from 'react'

import { Button, Card } from 'react-bootstrap'
import { babyshop } from '../context'
import { useNavigate } from 'react-router-dom'


function Babytoys() {
  const data=useContext(babyshop)
  const navigate=useNavigate()
  const {state}=data
  const dress=state.filter((item)=>item.type==="toys")
 
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

export default Babytoys