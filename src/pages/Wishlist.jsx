import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addtoCart } from '../redux/cartSlice';

function Wishlist() {
  const wishListItem = useSelector((state) => state.wishlistReducer)
  console.log('==wishlist item in wishlist page===');
  console.log(wishListItem);

  const dispatch = useDispatch();
  const handleWishlist = (item) => {
    dispatch(addtoCart(item));
    dispatch(removeFromWishlist(item.id));
  }

  return (
    <>
      <button className='btn btn-success mt-4 ms-4'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <i class="fa-solid fa-arrow-left"></i>
          Back to home</Link>
      </button>
      <Row className='m-5'>
        {
          wishListItem?.length > 0 ?
            wishListItem.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}</p>
                      <p className='fw-bolder'>Price: &#x20B9; {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success" onClick={() => handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div style={{ height: '100vh' }} className='d-flex justify-content=center align-items-center flex-column'>
              <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" height='300px' alt="" />
            </div>
        }
      </Row>
    </>
  )
}

export default Wishlist