import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../store/auth/authSlice'
import '../scss/login.scss'

const Login = () => {

  const navigate = useNavigate()

  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    dispatch(loginUser(formData))
    navigate('/')
  }

  return (
    <div className='logincenter' >
      <form className='addProductform' noValidate onSubmit={handleSubmit}>
        <h1 className='text-center my-5'>Login as an admin</h1>
        <div className="center">
          {isLoggedIn && <p className='text-success'>Du är inloggad.</p>}
          <p className='centerp' >Not a admin? <Link className='linkstylelogin' to="/register">Register</Link> instead</p>
          <label htmlFor="email" className='form-label-login'>Email address</label>
          <input type="email" className='form-control' id='email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="center">
          <label htmlFor="password" className='form-label-login'>Password</label>
          <input type="password" className='form-control' id='password' value={formData.password} onChange={handleChange} />
          {loading && <p>Loading...</p>}
          {error && <p className='text-danger'>{error}</p>}
          <button className='addProductFormBtn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login