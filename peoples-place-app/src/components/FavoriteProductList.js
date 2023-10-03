import ProductCard from "./ProductCard";

function FavoriteProductList({ favProducts, onFavoriteProduct }) {
  // set favoriteproducts state to an empty array
  // when a list item is favortied
  // add item to array by id
  // event occurs in the ProductCard component
  // needs to update FavoriteProductList component
  const favCards = favProducts.map((product) => {
    return (
       <ProductCard 
          key={product.id} 
          product={product}
          onFavoriteProduct={onFavoriteProduct}
       />
    )
 })
 //if product is currently in the array then delete it
  return (
    <section>
      <h2>Favorite Products</h2>
      <div>{favProducts.length === 0 && <div>No Favorite Products</div>}</div>
      <ul className="fav-cards">{favCards}</ul>
    </section>
   )
}

export default FavoriteProductList