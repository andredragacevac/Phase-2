import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import RequestList from './RequestList';
import RequestProductForm from './RequestProductForm';


// render req form and list
// fetch and display req array
// when req is submitted update db
function RequestProductContainer() {
  const [ requests, setRequests ] = useState([]);

  //when user submits form add the req to reqlist
  //adds product to requests array 
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
    <div>
      <Routes>
        <Route path="/requests/new" element={<RequestProductForm onSubmitRequest={onSubmitRequest}/>} />
        <Route path="/requests" element={
          <RequestList 
            requests={requests} 
            onSubmitRequest={onSubmitRequest}
          />} 
        />
      </Routes>
    </div>
  )
}

export default RequestProductContainer