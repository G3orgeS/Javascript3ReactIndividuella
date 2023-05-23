import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../store/products/ProductSlice'

const AddProductForm = () => {

  return (
<div className="centeringformdiv">
    <div className='addProductform'>
      <h1 className='text-center'>Add a new product</h1>
      <form noValidate>
        <div className="input-group">
          <label htmlFor="name" className="form-label">Product Title:</label>
          <input type="text" className="form-control" id='title' />
        </div>
        <div className="input-group">
          <label htmlFor="shortDescription" className="form-label">Short Description:</label>
          <textarea className='form-control' id="shortDescription" rows="1" ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="price" className="form-label">Product Price:</label>
          <input type="number" inputMode='decimal' className="form-control" id='price' />
        </div>
        <div className="input-group">
          <label htmlFor="category" className="form-label">Category:</label>
          <textarea className='form-control' id="category" rows="1" ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="description" className="form-label">Product Description:</label>
          <textarea className='form-control' id="description" rows="3" ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="imageURL1" className="form-label">Image Url 1:</label>
          <input type="text" className="form-control" id='imageURL1' />
        </div>
        <div className="input-group">
          <label htmlFor="imageURL2" className="form-label">Image Url 2:</label>
          <input type="text" className="form-control" id='imageURL2' />
        </div>
        <div className="input-group">
          <label htmlFor="imageURL3" className="form-label">Image Url 3:</label>
          <input type="text" className="form-control" id='imageURL3'/>
        </div>
        <div className="input-group">
          <label htmlFor="imageURL4" className="form-label">Image Url 4:</label>
          <input type="text" className="form-control" id='imageURL4'  />
        </div>
        <div className="input-group">
          <label htmlFor="imageURL5" className="form-label">Image Url 5:</label>
          <input type="text" className="form-control" id='imageURL5'  />
        </div>
        <div className='center'>
        <button className="btn btn-primary addProductFormBtn">Add Product</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddProductForm