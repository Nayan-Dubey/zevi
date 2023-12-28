import React from 'react'
import  { useState ,useEffect} from 'react';
import App from "./App"
import "./Search_bar.css"
import search_icon from "../images/search.png"


const Search_bar = ( ) => {
 const [searchedtext,setsearchedtext]=useState("");
  let [inputtext, setinputtext] = useState("");
  const input_text=(e)=>{
    setinputtext(e.target.value);
  }
const [searchdata,setsearchdata]=useState([]);
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      setsearchdata(data);
    });
}, []);

  return (
    <div>
      
    <div id="search-container">
      <div>
      <input type="text"  id="input_text" placeholder='Search...' onChange={input_text}></input>
     <img id="img"src={search_icon} onClick={()=>{setsearchedtext(inputtext);}} ></img>  
      
       
    
    </div>
    <div id='dropdown'>{
searchdata.filter(item=>{
  const searchterm=inputtext.toLowerCase();
  const title=item.title.toLowerCase();
  return searchterm&&title.startsWith(inputtext);
}).map((item)=>(
<div id="dropdown-row">{item.title}</div>

))


    }</div>
    </div>
   <App searchedtext={searchedtext} setsearchedtext={setsearchedtext} />
    </div>
   
  )
}

export default Search_bar