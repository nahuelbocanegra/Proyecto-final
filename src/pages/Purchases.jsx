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

                <div key={elem.id}>
                    <h2 style={{fontSize:"1rem",margin:"5px"}}>{elem.createdAt}</h2>
                    <div className="element-products">
                    {elem.cart.products.map(element => (
                        <Link key={element.id} to={`/Products/${element.id}`}>{element.brand}</Link>
                ))}
                    </div>
                </div>
                
            ))}
        </div>
    );
};

export default Purchases;