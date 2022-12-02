import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCart, thunkcart } from '../store/slice/cart.slice';
import Button from 'react-bootstrap/Button'; 
import { thunkpostPurcheses } from '../store/slice/cart.slice';

const Cart = ({show,handleClose}) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(thunkcart())
    }, [])
   
    const Cart = useSelector(state => state.cartSlice)
    let subtotal = 0
    const total = () => {
        
        Cart.map(e=> {
           subtotal += parseInt(e.price) * e.productsInCart.quantity

        })
       
        return subtotal
        
    }
   console.log(Cart)
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><i className='bx bx-cart-alt'></i></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {Cart.map(product => (
                    < div key={product.id}>
                    <h2 style={{fontSize:"1rem"}}>{product.title}</h2>
                    <p>${product.price}</p>
                    </div>
                ))}

            </Offcanvas.Body>
          
            <p>Total:     ${total()}</p>
            <Button style={{borderRadius:"5px 5px 0 0"}} onClick={() => { dispatch(thunkpostPurcheses()) }}>CHECKOUT</Button>
        </Offcanvas>
    );
};

export default Cart;
