import React from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  return (
<div className='formLoginAdmin'>
      <div className="form-login-container">
        <Form >
          <h4>Please Login to Your Account</h4>
          <div className="input-group-login d-flex-form">
            <label className='form-label-link' htmlFor="email">E-mail* <Link className='form-link-register-padding' to='/register'>Don't have an Account yet?</Link></label>
            <input type="email" name="email" id="email" className='input-login'  />
          </div>
          <div className="input-group-login d-flex-form">
            <label htmlFor="password" className='form-label-link-two'>Password* <Link to='/forgotpassword' className='form-link-register-padding'>Forgot your password?</Link></label>
            <input type="password" name="password" id="password" className='input-login'  />
          </div>
          <div>
      <button className='btn-submit-login' type="submit" >Submit</button>
    </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm