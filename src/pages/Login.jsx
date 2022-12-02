import React from 'react';
import { useForm } from 'react-hook-form';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
    

const Cart = () => {
    /*john@gmail.com
john1234
 */
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const submit = (data) => {
        axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login",data)
            .then(res => {
                navigate("/")
                localStorage.setItem("token",res.data.data.token)
            })
            .catch(error => {
                if (error.response.status === 404) {
                    alert("error")
                } else {
                    console.log(error.response.data)
                }
             })
    }
    return (
        <div className="container-login">
            <Container style={{
                padding:"1rem",
                maxWidth: "400px",
                border: " 2px solid #78c2ad",
                borderRadius:"10px",
                height: "300px",
                background:"rgb(120 194 173 / 25%)"
            }}>
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label style={{ color: "#78c2ad",width:"200px" }}  column  sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                        <Form.Control placeholder="Email"  {...register("email")} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label style={{ color: "#78c2ad", width: "200px" }} column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
                </Col>
            </Form.Group>
                <Button style={{ background:"#78c2ad",border:"0"}} variant="secondary" type='submit'>Login</Button>
            </Form>
            </Container>
        </div>
    );
};

export default Cart;