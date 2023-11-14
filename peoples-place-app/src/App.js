import { Routes, Route } from "react-router";

import Header from "./components/Header";
import RequestProductContainer from "./components/RequestProductContainer";
import StockProductList from "./components/StockProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element= {<StockProductList />} />
        <Route path="/requests" element= {<RequestProductContainer />} />
      </Routes>
    </div>
  );
}

export default App;
