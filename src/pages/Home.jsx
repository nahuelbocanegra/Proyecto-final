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
import {inputThunk} from '../store/slice/products.slice'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsSlice)
    const [categories, setCategori] = useState([])
    const [inputData,setInputData]=useState("")
    useEffect(() => {
        dispatch(getProductsThunck())
        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories").then(res => setCategori(res.data.data.categories))
    }, [])
   
    console.log(categories)
    return (
        <div className='Home'>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={inputData}
                    onChange={e => { setInputData(e.target.value) }}
                />
                <Button variant="outline-secondary" id="button-addon2"  onClick={() => {dispatch(inputThunk(inputData)) }}>

                    Button
                </Button>
            </InputGroup>
            <div>
                {categories.map(e => (
                    <Button   key={e.id} onClick={() => { dispatch(getcategoryProductsthunk(e.id))}}>{e.name}</Button>
                ))}
            </div>
            <h1>home</h1>
            {products?.map(product => (
                <Link key={product.id} className='link' to={`/Products/${product.id}`}>{product.title}</Link>
            ))}
        </div>
    );
};

export default Home;