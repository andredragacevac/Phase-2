import { useState } from 'react'

import RequestList from './RequestList';
import RequestProductForm from './RequestProductForm';

// render req form and list
// fetch and display req array
// when req is submitted update db
function RequestProductContainer() {
  cosnt [ requests, setRequests ] = useState([]);

  //when user submits form add the req to reqlist
  //return new array with the requested products
  const onSubmitRequest = (product) => {
    setRequests([ ...requests, {...product}])
  }

  return (
    <div>
      <RequestList />
      <RequestProductForm onSubmitRequest={onSubmitRequest}/>
    </div>
  )
}

export default RequestProductContainer