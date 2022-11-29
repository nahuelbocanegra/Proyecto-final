import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkpurcheses } from '../store/slice/purcheses.slice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Purchases = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunkpurcheses()) 
    },[])
    const purchases = useSelector(state => state.purchesesSlice)
    console.log(purchases)
    return (
        <div>
            {purchases.map(elem => (
                <>
                <li>{elem.createdAt
                }</li>
                <div>
                    {elem.cart.products.map(element => (
                        <Link to={`/Products/${element.id}`}>{element.brand}</Link>
                ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Purchases;