import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunck } from '../store/slice/products.slice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const ListProducts = useSelector(state => state.productsSlice)
    const productFound = ListProducts.find(element => element.id == id)
    const relativeProducts = ListProducts.filter(e => 
        e.category.id === productFound?.category.id && productFound.id !== e.id
    )
    console.log(relativeProducts)

    useEffect(() => {
        dispatch(getProductsThunck())

    }, [])
    return (
       <div>
            <div className='Card-main'>
                    <img  className='Card-img' src={productFound?.productImgs[0]} alt="" />
                <div className='Card-body'>
                    <h2>{productFound?.title}</h2>  
                    <p>{productFound?.description

                    }</p>
                    <h4>${productFound?.price
                    }</h4>
                    <Button variant="primary"><i className='bx bx-cart-alt'></i> </Button>
            </div>
                
           </div>

            <ul className='container-ul'>
                {relativeProducts.map(product => (
                    <Link key={product.id} to={`/Products/${product.id}`} >
                        <Card  className='Card-relative' style={{ width: '19rem', height: "350px" }}>
                            <Card.Img variant="top" src={product?.productImgs?.[0]
                            } />
                            <Card.Body className='Card-relative-body'>
                                <Card.Title>{product.title}</Card.Title>
                                <Button variant="primary"><i className='bx bx-cart-alt'></i></Button>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </ul>

        </div>
    );
};

export default Products;