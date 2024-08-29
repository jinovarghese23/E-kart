import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}}className='d-flex justify-content-center align-items-center flex-column  mt-5 bg-primary text-white'>
       <div className="d-flex justify-content-evenly align-items-center mb-5 w-100">
                <div style={{ width: '400px' }} >
                    <h5><i class="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#FFD43B' }}> E-KART</i></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur perspiciatis facilis voluptatum? Veniam ducimus dolorum itaque, impedit ut officiis, debitis saepe, fuga modi temporibus officia nam est eligendi? Inventore!</p>
                </div>
                <div className="d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                    <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
                    <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
                </div>
                <div className='d-flex flex-column'>
                  <h4>Guides</h4>
                  <Link to={"https://react.dev/"} target='_blank' style={{textDecoration:'none',color:'white'}} >React</Link>
                  <Link to={"https://react.dev/"} target='_blank' style={{textDecoration:'none',color:'white'}} >React Bootstrap</Link>
                  <Link to={"https://react.dev/"} target='_blank' style={{textDecoration:'none',color:'white'}} > Boot Watch</Link>
                </div>
                <div>
                  <h4>Contact</h4>
                  <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='Enter email id' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                  </div>
                  <div className='d-flex justify-content-evenly mt-3'>
                    <Link style={{textDecoration:'none'}} className='text-warning'><i class="fa-brands fa-facebook fa-2x"></i></Link>
                    <Link style={{textDecoration:'none'}} className='text-warning'><i class="fa-brands fa-instagram fa-2x"></i></Link>
                    <Link style={{textDecoration:'none'}} className='text-warning'><i class="fa-brands fa-reddit-alien fa-2x"></i></Link>
                    <Link style={{textDecoration:'none'}} className='text-warning'><i class="fa-brands fa-linkedin fa-2x"></i></Link>

                  </div>
                </div>
            </div>
            <p style={{color:'white'}}>Copyright &#169; 2024 E-kart built with React Redux</p>
    </div>
  )
}

export default Footer