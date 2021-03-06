import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../css/Products/Products.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions/products';
import { addToCart } from '../../store/actions/cart';


function Products(props, {products, addToCart}) {

    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product);
    }

    const closeModal = () => {
        setProduct(false);
    }

    useEffect( () => {
        props.fetchProducts();
    }, [] )

    return (
        <div className='row m-3 d-flex justify-content-around'>
            <Fade left cascade>
                {
                    props.products && props.products.length ? props.products.map( product => (
                        <div className="col-sm-6 card m-2 p-0" style={{width: '18rem'}} key={product.id}>
                            <img src={product.imgURL} onClick={ () => openModal(product) } style={{width: '100%', height: '100%', cursor: 'pointer'}} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{product.price}$</li>
                                <li className="list-group-item">{product.size[0]} - {product.size[1]}</li>
                            </ul>
                            <div className="d-grid ">
                                <button className="btn btn-primary" type="button" onClick={ () => props.addToCart(product) }>Add To Cart</button>
                            </div>
                        </div>
                    )) : "loding"
                }
            </Fade>
            
            <Modal isOpen={product} className="modal-size container d-flex justify-content-center align-items-center" onRequestClose={closeModal} >
                <Slide top>
                    <div className="col-sm-6 card m-2 p-0" style={{width: '18rem'}} key={product.id}>
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" onClick={closeModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <img src={product.imgURL} style={{width: '100%', height: '100%', cursor: 'pointer'}} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{product.price}$</li>
                            <li className="list-group-item">{product.size}</li>
                        </ul>
                    </div>
                </Slide>
            </Modal>
            
        </div>
    )
}

export default connect ( (state) => {
    return { 
        products: state.products.filterProducts
    }
}, { fetchProducts, addToCart } )(Products)