import React from 'react'
import ProductCard from './ProductCard'

function StockProductList({products}) {
   //accepts products as props
   //destructures products from props obj
   //maps over products array to render a 
   //ProductCard component for each element 
      //provide key prop set to product id value
      //provide each product object as a prop 
      //to pass to ProductCard
   const productCard = products.map((product) => {
      return <ProductCard key={product.id} product={product} />
   })
  return (
   <ul className='cards'>{productCard}</ul>
  )
}

export default StockProductList