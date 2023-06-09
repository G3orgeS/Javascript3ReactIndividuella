import React, { useState } from 'react';
import './edit.scss';
import '../../addProductForm/addProductForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

const Edit = ({ product }) => {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    title: product.title,
    category: product.category,
    price: product.price,
    shortDescription: product.shortDescription,
    description: product.description,
    imageURL: product.imageURL,
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setProductData(form => ({
      ...form,
      [id]: value,
    }));
  };

  const handleImageChange = (e, index) => {
    const { value } = e.target
    const images = productData.imageURL
    images[index] = value
    setProductData(form => ({
      ...form,
      imageURL: images
    }))
  }

  const updateProductToDB = async (e) => {
    e.preventDefault()
    try {
      const docRef = doc(db, 'products', product.id);

      await updateDoc(docRef, {
        title: productData.title,
        category: productData.category,
        price: productData.price,
        shortDescription: productData.shortDescription,
        description: productData.description,
        imageURL: productData.imageURL,
      });

      dispatch(updateProduct(productData));


      navigate('/productDetails/:id');
    } catch (error) {
      console.log(error);
    }};
    
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
            <div className=' editProductform'>
              <h1 className='text-center'>Uppdatera Produkten</h1>
              <form onSubmit={updateProductToDB}>
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
                {productData.imageURL.map((img, index) => (
                  <div key={index} className="input-group">
                    <label htmlFor={"imageURL" + index + 1} className="form-label">Image Url {index + 1}:</label>
                    <input type="text" className="form-control" id={"imageURL" + index + 1} value={productData.imageURL[index]} onChange={(e) => handleImageChange(e, index)} />
                  </div>
                ))
                }
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