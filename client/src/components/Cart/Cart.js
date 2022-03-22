import React, { useState } from 'react';
import '../../css/Cart/Cart.css';
import { connect } from 'react-redux';
import { removeCart } from '../../store/actions/cart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

function Cart(props, {cartItem, removeFromCart}) {

    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const closeCheckoutForm = () => {
        setShowCheckoutForm(false);
        console.log('close');
    }

  return (
    <div className='container my-2'>
        <h1>{props.cartItems.length == 0 ? 'Empty Cart' : 'Shopping Cart'}</h1>

        <div class="shopping-cart">
            <div class="column-labels">
                <label class="product-image">Image</label>
                <label class="product-details">Product</label>
                <label class="product-price">Price</label>
                <label class="product-quantity">Quantity</label>
                <label class="product-removal">Remove</label>
                <label class="product-line-price">Total</label>
            </div>

            {
                props.cartItems.map( item => (
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
                            <button class="remove-product" onClick={() => props.removeCart(item)}>Remove</button>
                        </div>
                        <div class="product-line-price">{item.price * item.qty}</div>
                    </div>
                ))
            }

            {
                props.cartItems.length != 0 && <>
                    <div class="totals">
                        <div class="totals-item">
                            <label>Subtotal</label>
                            <div class="totals-value" id="cart-subtotal">{props.cartItems.reduce( (acc, item) => { return acc + item.price } , 0)}</div>
                        </div>
                        <div class="totals-item">
                            <label>Tax (5%)</label>
                            <div class="totals-value" id="cart-tax">3.60</div>
                        </div>
                        <div class="totals-item">
                            <label>Shipping</label>
                            <div class="totals-value" id="cart-shipping">15.00</div>
                        </div>
                        <div class="totals-item totals-item-total">
                            <label>Grand Total</label>
                            <div class="totals-value" id="cart-total">90.57</div>
                        </div>
                    </div>
                    <button class="checkout" onClick={ () =>setShowCheckoutForm(true) }>Checkout</button>
                </>
            }
        </div>
        {
            showCheckoutForm && (<CheckoutForm closeCheckoutForm={closeCheckoutForm} getCartData={props.cartItems} />)
        }


        
    </div>
  )
}

export default connect ( (state) => {
    return {
        cartItems: state.cart.cartItems
    }
} , { removeCart })(Cart)
