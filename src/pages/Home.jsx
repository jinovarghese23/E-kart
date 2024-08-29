import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtoWishlist } from '../redux/wishlistSlice';
import { addtoCart } from '../redux/cartSlice';

function Home() {
  const response = useFetch("https://fakestoreapi.com/products")
  console.log("========all peodects======");
  console.log(response);

  const dispatch = useDispatch();

  return (
    <>
      <Row className='m-5'>
        {
          response?.length > 0 ?
            response.map((item) => (
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
                      <Button onClick={() => dispatch(addtoWishlist(item))} variant="outline-danger"><i class="fa-solid fa-heart" ></i></Button>
                      <Button onClick={() => dispatch(addtoCart(item))} variant="outline-success"><i class="fa-solid fa-cart-shopping" ></i></Button>
                    </div>

                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div><p>No items found</p></div>
        }
      </Row>
    </>
  )
}

export default Home