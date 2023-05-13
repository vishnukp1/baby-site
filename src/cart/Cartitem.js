import React, { useContext } from 'react'
import { babyshop } from '../context'
import { Button, Card } from 'react-bootstrap'

function Cartitem() {
  const data=useContext(babyshop)
  const {cart,setcart,state}=data
  function deleteItem(id) {
    const newArray = cart.filter((item) => item.id !== id);
    setcart(newArray);
  }
  const increament = (id) => {
  
    
    setcart(cart => cart.map((item) => item.id === id ? {...item, quatity: item.quatity + 1 } : item ))

    console.log(cart);

  }
  const decreament = (id) => {
  
    
    setcart(cart => cart.map((item) => item.id === id ? {...item, quatity: item.quatity - (item.quatity > 0 ? 1:0) } : item ))

    console.log(cart);

  }
   
  
  return (
    <div>
      {cart.map((post) => (

  <Card className='products' style={{ width: '100 %'}}>
   <Card.Img className='cardimg' variant="top" src={post.productImage}  />

   <Card.Body>
     <Card.Title>{post.quatity * post.price}</Card.Title>
     <Card.Text>
     {post.productName}
     </Card.Text>
     <Button onClick={() => increament(post.id)}> + </Button>{post.quatity}
     <Button onClick={() => decreament(post.id)}> - </Button><br></br><br></br>
   <Button onClick={() => deleteItem(post.id)}>remove</Button>
   </Card.Body>
 </Card>
))}

    </div>
  )
}

export default Cartitem;