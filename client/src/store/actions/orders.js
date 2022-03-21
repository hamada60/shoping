import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "./types"

export const createOrder = ({order}) => {
    return (dispatch) => {
        fetch('/api/order', {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(order),
        })
        .then( res => res.json())
        .then( data => {
            console.log("here", data );
            dispatch ({
                type: CREATE_ORDER,
                data: {
                    order: data
                }
            })
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
        localStorage.clear("cartItems");
        dispatch ({type: CLEAR_CART});
    }
}

export const clearOrder = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ORDER
        })
    }
}