import Nav from "./components/Nav";
import React, {useState, useEffect} from "react";
import Footer from "./components/footer";
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import {books} from './data.js';
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart,{...book, quantity: 1}])
  }

  const options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/manga/2/stats',
    headers: {
      'X-RapidAPI-Host': 'jikan1.p.rapidapi.com',
      'X-RapidAPI-Key': '8b92011b9amsh4a42d860b3e3978p17ce06jsnf05d1c870993'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  function changeQuantity(book, quantity){

    setCart(cart.map(item => 
      
      item.id === book.id
      ? {
          ...item,
          quantity: +quantity,
        }
        : item
      ));
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item =>{
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
      <Nav numberOfItems = {numberOfItems()}/>
      <Route path="/" exact component={Home}/>
      <Route path="/games" exact render={() => <Books books={books}/>}/>
      <Route path="/games/:id" render = {() => <BookInfo books={books} addToCart = {addToCart} cart = {cart}/>}/>
      <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity = {changeQuantity} removeItem={removeItem}/>}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
