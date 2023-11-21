import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import About from "./components/About";
import Header from "./components/Header";
import StockProductList from "./components/StockProductList";
import RequestProductForm from "./components/RequestProductForm";
import RequestList from "./components/RequestList";

function App() {
  const [ requests, setRequests ] = useState([]);

  const onSubmitRequest = (product) => {
    setRequests([ ...requests, product])
  }

  useEffect(() => {
    let url = "http://localhost:4000/requests";
    fetch(url)
      .then((res) => res.json())
      .then((requestData) => setRequests(requestData));
  }, [])

  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route exact path="/" element= {<StockProductList />} />
        <Route path="/requests" element= {<RequestList requests={requests}/>} />
        <Route path="/requests/new" element= {<RequestProductForm onSubmitRequest={onSubmitRequest}/>} />
        <Route path="/about" element= {<About />} />
      </Routes>
    </div>
  );
}

export default App;
