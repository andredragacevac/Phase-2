import React from 'react'

function ProductCard({ product }) {
   //destructure properties of props object
   const { id, name, about, size } = product;
   
  return (
   <li className="card">
      <figure className="image">
         <img />
         <button className="favorite">
            Fav
         </button>
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