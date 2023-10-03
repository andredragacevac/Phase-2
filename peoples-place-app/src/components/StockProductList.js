import { useState } from 'react'
import ProductCard from './ProductCard'

function StockProductList({ products, onFavoriteProduct, onLoadProducts}) {
   //accepts products as props
   //destructures products from props obj
   const [ searchQuery, setSearchQuery ] = useState("");
   //change what is rendered based on searchQuery

   //searchResults filters through the array of products and returns
   //product if name matches searchQuery
   const searchResults = products.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
   })
   
   //maps over products array to render a 
   //ProductCard component for each element 
   //map over the search results to show filtered products
   const productCards = searchResults.map((product) => {
      return (
         <ProductCard 
            key={product.id} 
            product={product}
            onFavoriteProduct={onFavoriteProduct}
         />
      )
   })//provide key prop set to product id value
   //provide each product object as a prop 
   //to pass to ProductCard

   //
   const handleOnChange = (e) => {
      setSearchQuery(e.target.value)
   }
  return (
   <section>
      <button onClick={onLoadProducts}>Load Products</button>
      <h2>All Products</h2>
      <input type='text' placeholder='Search...' onChange={handleOnChange}></input>
      <ul className='cards'>{productCards}</ul>
   </section>
  )
}

export default StockProductList