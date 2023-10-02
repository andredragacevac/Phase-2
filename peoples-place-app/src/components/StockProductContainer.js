import React, { useState } from 'react'

import StockProductList from './StockProductList';
import FavoriteProductList from './FavoriteProductList';

function StockProductContainer() {
  const [ products, setProducts ] = useState([]);
  const [ favProducts, setFavProduct ] = useState([]);
  // state is going to update every time a product is liked 
  // onFavorite product needs to update favProduct list
  // take likedProject as argument
  // map over og products and return the one that was liked
  //
  const onFavoriteProduct = (product) => {
    setFavProduct([ ...favProducts, {...product}])
  }
  // favorite project
  // like product event occurs in ProductCard
  // need to update products state to 
  // callback needs to be here to pass new like obj to favlist

  //fetch products from db.json
  //pass to StockProductList
  const onLoadProducts = () => {
    fetch("http://localhost:4000/products")
    .then((res) => res.json())
    .then((productsData) => setProducts(productsData));
  }

  return (
    <div>
      <StockProductList 
        products={products}
        onLoadProducts={onLoadProducts}
        onFavoriteProduct={onFavoriteProduct}
      />
      <FavoriteProductList 
        favProducts={favProducts}
        onFavoriteProduct={onFavoriteProduct}
      />
    </div>
  )
}

export default StockProductContainer