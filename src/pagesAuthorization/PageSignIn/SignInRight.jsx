import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie';

import {useMutation } from '@apollo/client'
import SIGNIN_MUTATION from '../../components/server/signin.js'

import './SignInRight.scss'
import { AuthContext } from '../../context/AuthContext'
import { useLocalStorage } from '../../hooks/useLocalStorage'
const SignInRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  const {setValue} = useLocalStorage('user')

  const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION);

  const handleSignIn = (data) => {
    signin({
      variables: {
        signInInput: {
          email: data.email,
          password: data.password,
        },
      },
    })
      .then((response) => {
        console.log('Logged in successfully', response.data);
        Cookies.set('accesstoken', response.data.signin.accessToken);
        Cookies.set('refreshtoken', response.data.signin.refreshToken);
        const user = JSON.stringify(response.data.signin.user);
        Cookies.set('user', user);
        setValue(response.data.signin.user)
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('SignIn failed', error);
      });
  };

  const onSubmit = handleSubmit(handleSignIn);


  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Log in</h2>
        <div className="form__descr">
          <p>
            No account?
            <span>
              <Link to="/SignUp">Create an account</Link>
            </span>
          </p>
        </div>
        <div className={`form__group  ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">E-mail</label>
          <div className="email__input">
            <input
              type="email"
              id="email"
              name="email"
              required
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          {errors.email?.type === 'required' && <div className="error-message">Please enter your email address</div>}
          {errors.email?.type === 'pattern' && <div className="error-message">Please enter a valid email address</div>}
        </div>
        <div className={`form__group ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <div className="password__input">
            <input
              type={isRepeatPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              required
              {...register('password', { required: true })}
            />
            <FontAwesomeIcon
              icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.password?.type === 'required' && <div className="error-message">Please enter your password</div>}
        </div>

        <div className=" wrap__btn">
          <button type="submit" className="btn__form">
            Log in
          </button>
        </div>
        <div className="form__group">
          <Link to="/ResetPassword" className="form__forgot">
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  )
}

export default SignInRight
