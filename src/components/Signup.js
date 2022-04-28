import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import styled from 'styled-components'

export default function Login({auth}) {

  const email = useRef()
  const password = useRef()

  const newUserSignup = async (e) => {
      e.preventDefault();
      try {
          await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          window.location = '/'
      } catch (err) {
          console.log(err.code, err.message)
      }
  }

  return (
    <SignupContainer className='signup-container'>
      <SignupItem>
        <div className='login-logo'><img src="./images/logo.svg" alt="logo"/></div>
        <input type="email" name="username" ref={email} placeholder='Email Address'/>
        <input type="password" name="password" ref={password} placeholder='Password'/>
        <button type='submit' onClick={newUserSignup}>Create account</button>
        <SignUp>Already have an account? <Link to='/login'>Login</Link></SignUp>
      </SignupItem>
    </SignupContainer>
  )
}

const SignupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 60px);
`

const SignupItem = styled.div`
  background-color: var(--dark-blue);
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  width: 550px;
  height: 375px;

  .login-logo img{
    display: block;
    margin: 0 auto 30px;
    width: 50px;
    height: 50px;
  }

  input{
    background-color: transparent;
    border: none;
    border-bottom: .25px solid rgba(255,255,255,0.3);
    color: #fff;
    font-size: 1rem;
    font-weight: 200px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    padding-left: 10px;

    &::placeholder{
      font-weight: 200;
    }
    
    &:focus{
      outline: none;
    }
  }

  button{
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    height: 40px;
    margin: 10px 0 30px;

    :hover{
      background-color: var(--tomato);
      border: 1px solid var(--tomato);
      cursor: pointer;
    }
  }
`
const SignUp = styled.div`
  font-weight: 200;
  text-align: center;

  a{
    color: var(--tomato);
    text-decoration: none;
  }
`