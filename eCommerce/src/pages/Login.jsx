import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../store/auth/authSlice'
import '../scss/login.scss'

const Login = () => {

  const navigate = useNavigate()

  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    await dispatch(loginUser(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted && user) {
      navigate('/')
    }
  }, [submitted, user])

  return (
    <div className='logincenter' >
      <form className='addProductform' noValidate onSubmit={handleSubmit}>
        <h1 className='text-center my-5'>Login to your account</h1>
        <div className="center">
          <p className='centerp' >Not a member? <Link className='linkstylelogin' to="/register">Register</Link> instead</p>
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