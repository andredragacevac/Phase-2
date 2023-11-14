import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function StockProductList() {

   const [ searchInputText, setSearchInputText ] = useState("");
   const [ products, setProducts ] = useState([]);
   const [ searchQuery, setSearchQuery ] = useState("");
   const [ selectedCat, setSelectedCat ] = useState("");
   //change what is rendered based on searchQuery
   // state is going to update every time a product is liked 
 
 
   //now fetch products on component load using useEffect
   //fetch url changes when selected category and search query change
   useEffect(() => {
     let url = "http://localhost:4000/products";
     if (selectedCat && searchQuery) {
       url += `?category=${selectedCat}&q=${searchQuery}`
     } else if (selectedCat) {
       url += `?category=${selectedCat}`
     } else if (searchQuery) {
       url += `?q=${searchQuery}`
     }
     fetch(url)
       .then((res) => res.json())
       .then((productsData) => setProducts(productsData));
   }, [selectedCat, searchQuery])

   //iterate over projects prop not filtered results client side
   //maps over products array to render a 
   //ProductCard component for each element 
   
   const productCards = products.map((product) => {
      return (
         <ProductCard 
            key={product.id} 
            product={product}
         />
      )
   })
   //provide key prop set to product id value
   //provide each product object as a prop 
   //to pass to ProductCard

   const handleOnChange = (e) => {
      setSearchInputText(e.target.value)
   }

   //delalys seacrchquery update so it doesnt
   //send a fetch right after every keystroke
   //cleanup
   //keep track of searchinput text in seperate piece of state 
   //type in input, change state in list and schedule update to seachquery
   // searchquery triggers fetch side effect
   //set up timer to delay update
   //allows to cancel prev update if user still typing
   useEffect(() => {
      const scheduledUpdate = setTimeout(() => {
        setSearchQuery(searchInputText);
      }, 300)
      
      return () => {
        clearTimeout(scheduledUpdate);
      }
    }, [setSearchQuery, searchInputText])

  return (
   <section>
      <h2>All Products</h2>
      <input type='text' 
         placeholder='Search...' 
         onChange={handleOnChange}
         value={searchQuery}
      />
      <div className="filter">
        <button onClick={() => setSelectedCat("")}>All</button>
        <button onClick={() => setSelectedCat("clothing")}>Clothing</button>
        <button onClick={() => setSelectedCat("shoe")}>Shoes</button> 
      </div>
      <ul className='cards'>{productCards}</ul>
   </section>
  )
}

export default StockProductList