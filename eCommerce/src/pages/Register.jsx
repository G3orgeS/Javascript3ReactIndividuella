import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, setError } from '../store/auth/authSlice'
import '../scss/register.scss'

const Register = () => {

  const { user, loading, error } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (formData.password != formData.confirmPassword) {
      dispatch(setError("the passwords don't match"))
      return
    }

    await dispatch(registerUser(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted && user) {
      navigate('/')
    }
  }, [submitted, user])

  return (
    <div>
      <div className='logincenter'>
        <form className='addProductform' noValidate onSubmit={handleSubmit}>
          <h1 className='text-center my-5'>Register </h1>
          <div className="center">
            <p className='centerp'><Link className='linkstylelogin' to="/login">Login</Link> instead</p>
            <label htmlFor="email" className='form-label-register'>Email address</label>
            <input type="email" className='form-control' id='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className="center">
            <label htmlFor="password" className='form-label-register'>Password</label>
            <input type="password" className='form-control' id='password' value={formData.password} onChange={handleChange} />
          </div>
          <div className="center">
            <label htmlFor="confirmPassword" className='form-label-register'>Confirm Password</label>
            <input type="password" className='form-control' id='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            <button className='addProductFormBtn'>Register</button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p className='text-danger'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Register