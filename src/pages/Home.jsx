import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProductsThunck } from '../store/slice/products.slice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getcategoryProductsthunk } from '../store/slice/products.slice';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { inputThunk } from '../store/slice/products.slice'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsSlice)
    const [categories, setCategori] = useState([])
    const [inputData, setInputData] = useState("")
    useEffect(() => {
        dispatch(getProductsThunck())
        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories").then(res => setCategori(res.data.data.categories))
    }, [])
    
    return (
        <div className='Home'>
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        {categories.map(e => (
                            <ListGroup.Item style={{
                                cursor: "pointer",
                                marginBottom: "5px",
                                borderRadius: "5px",
                                background: "#78c2ad",
                                color: "white"
                                
                               

                            }} key={e.id} onClick={() => { dispatch(getcategoryProductsthunk(e.id)) }}>{e.name}</ListGroup.Item>
                        ))}
                    </ListGroup>

                </Col>
                <Col lg={9}>
                    <Container className="my-2">
                        <InputGroup className="mb-3"   >
                            <Form.Control style={{ border: "1px solid #78c2ad" }}
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={inputData}
                                onChange={e => { setInputData(e.target.value) }}
                            />
                            <Button style={{ border: "1px solid #78c2ad", background:"#78c2ad",color:"white" }} variant="outline-secondary" id="button-addon2" onClick={() => { dispatch(inputThunk(inputData)) }}>

                                Button
                            </Button>
                        </InputGroup>
                    </Container>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products?.map(product => (
                            <Col key={product.id}>
                                <Card style={{ height: "300px", border: "2px solid #78c2ad", position: "relative", borderRadius: " 15px 15px 0 15px " }} >
                                    <Container className="my-2">
                                        <Link style={{ textDecoration: "none" }} to={`/Products/${product.id}`}>
                                            <Card.Img style={{ height: "180px", objectFit: "contain" }} variant="top" src={product.productImgs?.[0]
                                            } />

                                            <Card.Body style={{borderTop:"1px solid grey"}}>
                                                <Card.Title style={{ fontSize: "0.75rem", color: "black" }}>{product.title}</Card.Title>
                                                <Card.Text style={{
                                                    fontSize: "1rem", color: "black", position: "absolute",
                                                    bottom: "-5px",
                                                    right: "90px",
}}>
                                                    ${product.price}
                                                </Card.Text>
                                                <Button style={{ position: "absolute", bottom: "-2px", right: "-2px", borderRadius: " 10px 0 0 0 ", width: "50px" }} variant="primary"><i style={{fontSize:"1.3rem",textAlign:"center", marginTop:"5px"}} className='bx bx-right-arrow-alt'></i></Button>
                                            </Card.Body>
                                        </Link>
                                    </Container>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


        </div>
    );
};

export default Home;