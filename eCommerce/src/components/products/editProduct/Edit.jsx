import React, { useState } from 'react';
import './edit.scss';
import { useDispatch, useSelector } from 'react-redux';

const Edit = ({ product }) => {

  const [imageURL, setImageURL] = useState('');
  const [imageURL1, setImageURL1] = useState('');

  const dispatch = useDispatch()

  const [productData, setProductData] = useState({

    title: '',
    category: '',
    price: '',
    shortDescription: '',
    description: '',
    imageURL: []
  })

  const handleChange = e => {
    const { id, value } = e.target
    setProductData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      ...productData,
      imageURL: [imageURL1],
      price: +productData.price
    }

    dispatch(addProduct(data))
  }


  return (
    <>
      <div className='details-wrapper'>
        <div className='details-container'>
          <div className='img-wrapper'>
            <div className='largeProductImgContainer'>
              <img className='largeProductImg' src={product.imageURL[0]} alt="Product image" srcSet="" />
            </div>
            <div className='smallImg-wrapper'>
            </div>
            <div className='detailsLine'></div>
            <h3>{product.title}</h3>
          </div>
          <div className='text-wrapper'>
            <div className='editcenter editProductform'>
              <h1 className='text-center'>Uppdatera Produkten</h1>
              <form noValidate onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name" className="form-label">Product Title:</label>
                  <input type="text" className="form-control" id='title' value={productData.title} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="shortDescription" className="form-label">Short Description:</label>
                  <textarea className='form-control' id="shortDescription" rows="1" value={productData.shortDescription} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="price" className="form-label">Product Price:</label>
                  <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="category" className="form-label">Category:</label>
                  <textarea className='form-control' id="category" rows="1" value={productData.category} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="description" className="form-label">Product Description:</label>
                  <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="imageURL1" className="form-label">Image Url 1:</label>
                  <input type="text" className="form-control" id='imageURL1' value={imageURL1} onChange={(e) => setImageURL1(e.target.value)} />
                </div>
                <div className='center'>
                  <button className="btn btn-primary addProductFormBtn">Uppdatera</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit