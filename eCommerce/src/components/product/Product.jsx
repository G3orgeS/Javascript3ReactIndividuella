import './product.scss'
import { Link } from 'react-router-dom'
import { FiEdit2, FiDelete } from 'react-icons/fi';


const Product = ({ product }) => {
  return (
    <Link to={`/productDetails/${product.id}`}>
        <div className='productstylebox'>
        <div className='productGridTitleContainer'>
          
        <div className="titelcontainerstyle">
        <img className='productGridImage' src={product.imageURL[0]} alt="Product image"/>
        <h2>{product.title}</h2>
        <div className='editanddeletediv'>
        <button className=""><FiEdit2 className='opacity height' /></button>
        <button className=""><FiDelete className='opacity height' /></button>
        </div>
        </div>
        </div>
    </div>
      </Link>
  )
}

export default Product