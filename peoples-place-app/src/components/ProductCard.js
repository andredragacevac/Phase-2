import React from 'react'

function ProductCard({ product }) {
   // if state = true remove from favProducts
   //destructure properties of props object
   const { id, name, about, size } = product;

   //if liked is false 
   //set isLiked to true and post to favorites array
   //else if isLiked is true
   //set isLiked to false and remove from favorites array

  return (
   <li className="card">

      <figure className="image">
         <img />
      </figure>

      <section className="details">
         <h4>{name}</h4>
         <p>{about}</p>
         <span className="size badge">Size: {size}</span>
      </section>

      <footer className="extra">

         <div className="cart button">
            <button>
               Add to cart
            </button>
         </div>
      </footer>
 </li>
  )
}

export default ProductCard