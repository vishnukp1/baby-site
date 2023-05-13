import React, { useContext} from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { babyshop } from '../context'

function Cartgood() {
    const data=useContext(babyshop)
const navigate=useNavigate()
    const {state,setcart,cart,auth,
      setauth}=data
    const {id}=useParams()
  

    const newcart=state.filter((item)=>item.id===parseInt(id))
    function addcart(){
      if(auth===true){
        const [goods]=newcart
     
        const cartproduct=cart.filter((item)=> item.id === goods.id)
        if(cartproduct.length > 0){
          alert("product already in the cart")
        }else{
         
          setcart(prevState => [...prevState,goods])
          
  
        }
      }else{
        alert("please login")
        navigate("/login")
   
    }
  }
  return (
    <div>
        {newcart.map((post) => (
  <Card className='products' style={{ width: '18rem'}}>
   <Card.Img className='cardimg' variant="top" src={post.productImage}  />
   <Card.Body>
     <Card.Title >{post.price}</Card.Title>
     <Card.Text>
     {post.productName}
     </Card.Text>
     <Button variant="primary" onClick={addcart}>add cart</Button>
   </Card.Body>
 </Card>
))}
      
    </div>
  )
}

export default Cartgood
