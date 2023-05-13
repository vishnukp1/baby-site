import React from 'react'
import "./Navbar.css"


const Main = () => {
  return (
    <div>

<div className='mainhead'>
        <div className="lefthead">
         <div className='maintext'>
          
        <h1>Baby Essential <br></br>Fashion & Nursery</h1><br></br>
        <button className='mainbtn'>shop now</button>
        </div> 
        </div>
     
      <div className='homeimg'>
        <img src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png" alt="" /></div>
      </div>
    <div className='centerdiv'>
      <div className='imgleft'>
        <img src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-promo-banner-img-1.png" alt="" />
      </div>
      <div className='imgcenter'>
        <img src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-promo-banner-img.png" alt="" />
      </div>
      <div className='imgright'>
        <img src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-promo-banner-img-3.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Main;