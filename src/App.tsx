import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Registration } from './Registration';
import { Gallery } from './Gallery';
import { Product } from './Product';
import { AddProduct } from './AddProduct';
import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Consoles } from './Consoles';
import { Games } from './Games';
import { Accessories } from './Accessories';
import { Subscriptions } from './Subscriptions';
import { DisplayProduct } from './DisplayProduct';
import { BigCard } from './BigCard';

function App() {

  
  return (
    <div className="App"> 
      <div id="content-wrap">

        <BrowserRouter>
        <Nav />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="addProduct" element={<AddProduct />} />         

          
          <Route path="/consoles" element={<Consoles />}>
            <Route path="/consoles/products/" element={<Gallery categoryId={1} /> }/>
            <Route path="/consoles/products/:product_id" element={<BigCard /> } />
          </Route>

          <Route path="games" element={<Games />} >
            <Route path="/games/products" element={<Gallery categoryId={2}/> }/>
            <Route path="/games/products/:product_id" element={<BigCard /> } />
          </Route>
          
          <Route path="accessories" element={<Accessories />} >
            <Route path="/accessories/products" element={<Gallery categoryId={3}/> }/>
            <Route path="/accessories/products/:product_id" element={<BigCard /> } />
          </Route>

          <Route path="subscriptions" element={<Subscriptions />} >
            <Route path="/subscriptions/products" element={<Gallery categoryId={4}/> }/>
            <Route path="/subscriptions/products/:product_id" element={<BigCard /> } />
          </Route>

        </Routes>
        </BrowserRouter>        
      </div>   

      <Footer />
    </div>    
 
  );

  //      <Gallery AllProducts = {allProducts}/>     
  // 
  //         <Registration />

  //    <AddProduct />



}

export default App;
