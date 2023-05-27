import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../app/action';
import Formbtn from './btnlogin/Formbtn';
import './Formforlogin.scss';
import { useDispatch } from 'react-redux';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import { setToken } from '../../../app/action';



const Formforlogin = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitLogin = async (e) => {
    const auth = getAuth();
    const db = getFirestore();
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const userLogIn = await signInWithEmailAndPassword(auth, email, password);
      const user = userLogIn.user;
      dispatch(setUser(user));
      dispatch(setToken(userLogIn.accessToken));
      localStorage.setItem('accessToken', user.accessToken)
      console.log('UserLogIn:::::', user.accessToken)

      const usersRef = collection(db, 'users');
      const userDocRef = doc(usersRef, user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.log('User data:', userData);
        localStorage.setItem('user', JSON.stringify(userData))

      } else {
        console.log('User does not exist');
      }

      handleLogin();
      navigate('/');
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className='center'>
      <div className="addProductform">
        <Form onSubmit={submitLogin}>
          <h4>Logga in admin</h4>
          <div className="input-group-login d-flex-form">
            <label className='form-label-link' htmlFor="email">E-mail* </label>
            <input type="email" name="email" id="email" className='input-login' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group-login d-flex-form">
            <label htmlFor="password" className='form-label-link-two'>Password* </label>
            <input type="password" name="password" id="password" className='input-login' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <Formbtn/>
        </Form>
      </div>
    </div>
  );
};

export default Formforlogin;
