import {useState} from 'react'

const initialState = {
  category: "",
  name: "",
  size: "",
  image: ""
}
function RequestProductForm({ onSubmitRequest }) {
  const [formData, setFormData] = useState(initialState)
  const { name, category, size, image } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({...formData, [name]: value}))
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmitRequest(formData);
  //   setFormData(initialFormState);
  // }

  //persist projects to db on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/requests", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData})
    })
      .then((response) => response.json())
      .then((newProject) => {
        onSubmitRequest(newProject);
        setFormData(initialState);
      });
  }

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <h3>Product Request Form</h3>

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        //onchange update form to display different types of sizes
        onChange={handleOnChange}
      >
        <option>Select Category</option>
        <option value="shoe">Shoes</option>
        <option value="clothing">Clothing</option>
      </select>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleOnChange}
      />

      <label htmlFor="size">Size</label>
      <select
        id="size"
        name="size"
        value={size}
        onChange={handleOnChange}
      >
        <option>Select Size</option>
        <option value="xxxs">xxxs</option>
        <option value="xxs">xxs</option>
        <option value="xs">xs</option>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
        <option value="xxl">xxl</option>
        <option value="xxxl">xxxl</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
        <option value="5.5">5.5</option>
        <option value="6">6</option>
        <option value="6.5">6.5</option>
        <option value="7">7</option>
        <option value="7.5">7.5</option>
        <option value="8">8</option>
        <option value="8.5">8.5</option>
        <option value="9">9</option>
        <option value="9.5">9.5</option>
        <option value="10">10</option>
        <option value="10.5">10.5</option>
        <option value="11">11</option>
        <option value="11.5">11.5</option>
        <option value="12">12</option>
        <option value="12.5">12.5</option>
        <option value="13">13</option>
      </select>

      <label htmlFor="image">Screenshot</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleOnChange}
      />

      <button type="submit">Add to requests</button>
    </form>
  )
}

export default RequestProductForm