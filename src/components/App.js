import React, { useEffect, useState } from 'react';

import "./App.css";
const App = ({searchedtext, setsearchedtext}) => {
  const [listofproducts, setlistofproducts] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setlistofproducts(data);setFilteredRestaurant(data);
      });
  }, []);
  
  
  return (searchedtext===(undefined||"")?(<div id="product-div">
     
      {listofproducts.map((product) => (
      <div id="product-list"> <h2>{product.category.toUpperCase()}</h2>
     
      <span> <h5>{product.title}</h5></span>
      <div id="product-image">
      <img id="pro-image"src={product.image}  />
     
      </div>
      <br></br>
      <span id ="info">
                 ₹
               <b> {product.price+" Only"}</b>
      
      <br></br>
       Ratings-
       {product.rating.rate}
      </span>
      
      
      
      
      </div>
      
      ))
      }
      
       
     
      
     
    </div>):(<div id="product-div">
     
    {listofproducts.filter((product) => {
   return searchedtext&& (product.title.toLowerCase().includes(searchedtext.toLowerCase()))}).map((filteredproduct)=>(<div id="product-list"> <h2>{filteredproduct.category.toUpperCase()}</h2>
     
   <span> <h5>{filteredproduct.title}</h5></span>
   <div id="product-image">
   <img id="pro-image"src={filteredproduct.image}  />
  
   </div>
   <span>
              ₹
             {filteredproduct.price}
   
   <br></br>
    Ratings-
    {filteredproduct.rating.rate}
   </span>
   
   
   
   
   </div>))
    
}
    
    
     
   
    
   
  </div>))
  
 { setlistofproducts(filteredRestaurant);}
  
};

export default App;