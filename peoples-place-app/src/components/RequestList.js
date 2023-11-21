import ProductCard from "./ProductCard"

// display list of requests created by request form
function RequestList({ requests }) {

  const reqCards = requests.map((product) => {
    return (
      <ProductCard 
        key={product.id} 
        product={product}
      />
    )
 })

  return (
    <section>
      <h2>Requested Products</h2>
      <ul className="cards">{reqCards}</ul>
    </section>
  )
}

export default RequestList