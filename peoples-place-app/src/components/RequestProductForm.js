import {useState} from 'react'

const initialFormState = {
  category: "",
  name: "",
  size: "--",
  image: ""
}
function RequestProductForm({ onSubmitRequest }) {
  const [formData, setFormData] = useState(initialFormState)
  const { name, category, size, image } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData(formData => {
      return {
        ...formData,
        [name]: value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRequest(formData);
    setFormData(initialFormState);
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
        <option value="xxxs">xxxs</option>
        <option value="xxs">xxs</option>
        <option value="xs">xs</option>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
        <option value="xxl">xxl</option>
        <option value="xxxl">xxxl</option>
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