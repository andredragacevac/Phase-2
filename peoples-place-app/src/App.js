import StockProductList from "./components/StockProductList";
import products from "./products";

function App() {
  return (
    <div className="App">
      <StockProductList 
        products={products}
      />
    </div>
  );
}

export default App;
