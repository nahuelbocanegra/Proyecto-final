import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunck } from '../store/slice/products.slice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { thunkpostCart } from '../store/slice/cart.slice';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Products = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [input, setInput] = useState(1)
    const ListProducts = useSelector(state => state.productsSlice)
    const productFound = ListProducts.find(element => element.id == id)
    const relativeProducts = ListProducts.filter(e =>
        e.category.id === productFound?.category.id && productFound.id !== e.id
    )
    const addCart = () => {
        const cart = {
            id: productFound.id,
            quantity: input
        }
        dispatch(thunkpostCart(cart))
    }

    useEffect(() => {
        dispatch(getProductsThunck())

    }, [])

    return (

        <>
            <Container fluid="md" style={{
                margin: "2rem 0",

            }}>
                <Row>
                    <Col sm={6} style={{

                        padding: "2rem 0",
                    }}>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img style={{
                                    height: "250px",
                                    objectFit: "contain",
                                    margin: "0 auto"
                                }}
                                    className="d-block w-100"
                                    src={productFound?.productImgs[1]}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{
                                    height: "250px",
                                    objectFit: "contain",
                                    margin: "0 auto"
                                }}
                                    className="d-block w-100"
                                    src={productFound?.productImgs[2]}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{
                                    height: "250px",
                                    objectFit: "contain",
                                    margin: "0 auto"
                                }}
                                    className="d-block w-100"
                                    src={productFound?.productImgs[0]}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col style={{
                        textAlign: "center",
                        padding: "2rem 0"
                    }}>
                        <h2 style={{ fontSize: "1.5rem" }}>{productFound?.title}</h2>
                        <p style={{ fontSize: "0.9rem" }}>{productFound?.description

                        }</p>
                        <h4 style={{ fontSize: "1.2rem" }}>${productFound?.price
                        }</h4>
                        <div className="input-products">

                            <input type="number" value={input} onChange={(e) => { setInput(e.target.value) }} />
                            <Button style={{
                                borderRadius: " 20px ",
                                width: "150px",
                                heigth: "40px",

                            }} variant="primary" onClick={addCart}>Add the Cart </Button>
                        </div>
                    </Col>
                </Row>
            </Container>


            <div>
                <Container fluid="md">
                    <Row>

                        {relativeProducts.map(product => (
                            <Col key={product.id} sm={4} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "1rem"

                            }}>
                                <Link to={`/Products/${product.id}`} >
                                    <Card style={{
                                        height: "300px",
                                        width: "300px"
                                    }}>
                                        <Card.Img style={{
                                            height: "200px",
                                            width: "180px",
                                            objectFit: "contain",
                                            margin: "0 auto"
                                        }} variant="top" src={product?.productImgs?.[0]
                                        } />
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: "1rem", textDecoration: "none" }}>{product.title}</Card.Title>
                                            <Button variant="primary"><i className='bx bx-cart-alt'></i></Button>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}

                    </Row>
                </Container>



            </div>
        </>
    );
};

export default Products;