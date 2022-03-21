import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'; 
import { createOrder, clearOrder } from '../../store/actions/orders';

function CheckoutForm(props) {

    const [value, setValue] = useState('');
    const [order, setOrder] = useState(false);

    const closeModalForm = () => {
        props.clearOrder();
    }

    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: value.username,
            email: value.email
        }
        props.createOrder({order});
    }

    const handelChange = (e) => {
        setValue( (prevState) => ({ ...prevState, [e.target.name]: e.target.value }) );
    }

  return (
    <div className='border border-2 rounded-3 shadow-sm p-3 bg-body rounded' style={{position: 'fixed', bottom: '0', left: '0', width: '100%'}}>
        <div className="modal-header">
            <h5 className="modal-title">Checkout Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.closeCheckoutForm}></button>
        </div>
        
        <form className='pt-3' onSubmit={submitOrder}>
            <div className="row mb-3">
                <label for="name" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" name='username' onChange={handelChange} />
                </div>
            </div>
            <div className="row mb-3">
                <label for="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" name='email' onChange={handelChange} />
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1">Example checkbox</label>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={ () =>setOrder(true) }>Checkout</button>
        </form>
        { 
            props.order && <Modal isOpen={props.order} onRequestClose={() =>props.clearOrder}>       
                <div className='container my-2'>
                    <div class="shopping-cart">
                        <div className="modal-header text-white rounded-pill my-4" style={{background: '#4C0027'}}>
                            <h5 className="modal-title">Order Done Successfully</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalForm}></button>
                        </div>
                        <div className="rounded">
                            <div class="row mb-3 text-white" style={{fontSize: '1.6rem'}}>
                                <div class="col-md-9 themed-grid-col py-1 rounded-pill" style={{background: '#570530'}}>Name</div>
                                <div class="col-md-3 themed-grid-col py-1 rounded-pill" style={{background: '#750550'}}>{props.order.name}</div>
                                <div class="col-md-9 themed-grid-col py-1 rounded-pill" style={{background: '#570530'}}>Email</div>
                                <div class="col-md-3 themed-grid-col py-1 rounded-pill" style={{background: '#750550'}}>{props.order.email}</div>
                            </div>
                        </div>
                        <div class="column-labels">
                            <label class="product-image">Image</label>
                            <label class="product-details">Product</label>
                            <label class="product-price">Price</label>
                            <label class="product-quantity">Quantity</label>
                            <label class="product-removal">Remove</label>
                            <label class="product-line-price">Total</label>
                        </div>
                        {
                            props.getCartData.map( item => (
                                <div class="product">
                                    <div class="product-image">
                                        <img src={item.imgURL} />
                                    </div>
                                    <div class="product-details">
                                        <div class="product-title">{item.name}</div>
                                        <p class="product-description">{item.title}</p>
                                    </div>
                                    <div class="product-price">{item.price}</div>
                                    <div class="product-quantity">
                                        <input type="number" className='rounded' value={item.qty} min="1" />
                                    </div>
                                    <div class="product-removal">
                                        <button class="remove-product">Remove</button>
                                    </div>
                                    <div class="product-line-price">{item.price * item.qty}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Modal>
        }
    </div>
  )
}


export default connect( (state) =>{
    return {
        order: state.order.order
    }
}, { createOrder, clearOrder } )(CheckoutForm)
