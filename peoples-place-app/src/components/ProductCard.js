import React from 'react'

function ProductCard() {
  return (
   <li className="card">
      <figure className="image">
         <img src={image} alt={name} />
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