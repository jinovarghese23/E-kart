import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  console.log('==wishlist item in wishlist page===');
  console.log(cartArray);

  const dispatch = useDispatch()
  
  // hook used to navigate to particular path or page
  const navigate=useNavigate()

  const [total, setTotal] = useState(0)
  const getTotal = () => {
    let sum = 0;
    cartArray.forEach((item) => {
      sum = sum + item.price
    })
    setTotal(sum)
  }
  useEffect(()=>{
    getTotal();
  },[cartArray])

  const handleCart=()=>{
    alert("Thank you ..Your order placed successfullly...");
    dispatch(emptyCart())
  }


  return (
    <>
      <button className='btn btn-success mt-4 ms-4'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <i class="fa-solid fa-arrow-left"></i>
          Back to home</Link>
      </button>
      <div style={{ marginTop: '100px' }}>
        {
          cartArray?.length > 0 ?
            <div className='row w-100'>
              <div className='col-lg-6 m-5'>
                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title.slice(0, 20)}</td>
                          <td><img src={item.image} height='100px' width='75px' /></td>
                          <td>₹{item.price}</td>
                          <td><Button onClick={() => dispatch(removeFromCart(item.id))} variant='outline-danger'>
                            <i class="fa-solid fa-trash"></i></Button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='col-lg-4'>
                <div className='border shadow p-5'>
                  <h3 className='text-primary'>Cart Summery</h3>
                  <h5>Total number of products: <span className='text-warning fw-bolder'>{cartArray?.length}</span></h5>
                  <h5>Total Price: <span className='text-warning fw-bolder'>₹ {total}</span></h5>
                  <button onClick={handleCart} className='btn btn-success rounded w-100'>Checkout</button>
                </div>
              </div>
            </div> :
            <div style={{ height: '100vh' }} className='d-flex justify-content=center align-items-center flex-column'>
              <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" height='300px' alt="" />
            </div  >
        }
      </div>
    </>
  )
}

export default Cart;