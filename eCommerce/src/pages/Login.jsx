import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../store/auth/authSlice'
import '../scss/login.scss'

const Login = () => {
  const navigate = useNavigate()

  // Retrieve user, loading, and error states from the Redux store
  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // Define isLoggedIn state and formData state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Handle form input change
  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    dispatch(loginUser(formData))
    setIsLoggedIn(true)
    navigate('/login')
  }

  // Perform effect when isLoggedIn and user states change
  useEffect(() => {
    if (isLoggedIn && user) {
      navigate('/')
    }
  }, [isLoggedIn, user])

  return (
    <div className='logincenter'>
      <form className='addProductform' noValidate onSubmit={handleSubmit}>
        <h1 className='text-center my-5'>Login</h1>
        <div className="center">
          <p className='centerp'>Can't log in? <Link className='linkstylelogin' to="/register">Register</Link> instead</p>
          <p className="centerp">Obs. Du måste vara inloggad för att få tillgång till sidan</p>
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
