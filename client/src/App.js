import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {

  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    console.log(e.target.value);
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
    console.log(order);
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

  return (
    <div className="layout">
      <Header />
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Products products={products} />
            </div>
            <div class="col-md-4">
              <Filter products={products} handelFilterBySize={handelFilterBySize} size={size} handelFilterBySort={handelFilterBySort} sort={sort} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
