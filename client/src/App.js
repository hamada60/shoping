import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Cart from "./components/Cart/Cart";


function App() {

  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState( JSON.parse(localStorage.getItem('cartItems')) || [] );

  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if(e.target.value == "ALL"){
      setProducts(data);
    }else{
      // let productsClone = [...products];
      let productsClone = data;
      let newProducts = productsClone.filter( pro => pro.size.indexOf(e.target.value) != -1 );
      setProducts(newProducts);
    }
    
  }

  const handelFilterBySort = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products]
    let newProducts = productsClone.sort( function(a, b) {
      if(order == "lowest"){
        return a.price - b.price;
      }else if(order == "highest"){
        return b.price - a.price;
      }else{
        return a.id < b.id ? 1 : -1;
      }
    })
    setProducts(newProducts);

  }

  const addToCart = (product) =>{
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach( item => {
      if(item.id == product.id){
        item.qty++;
        isProductExist = true;
      }
    }) 
    if(!isProductExist){
      cartItemsClone.push({...product, qty: 1})
    }
    setCartItems(cartItemsClone);
  }

  const removeFromCart = (product) =>{
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter( item => item.id != product.id ))
  }

  useEffect( () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  , [cartItems] )

  return (
    <div className="layout">
      <Header />
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Products products={products} addToCart={addToCart} />
            </div>
            <div class="col-md-4">
              <Filter products={products} productsNumber={products.length} handelFilterBySize={handelFilterBySize} size={size} handelFilterBySort={handelFilterBySort} sort={sort} />
            </div>
          </div>
        </div>
        <Cart cartItem={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
