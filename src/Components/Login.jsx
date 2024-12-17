import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Form } from 'react-bootstrap'
// import { box } from 'bootstrap'
import GoogleButton from 'react-google-button'
import "bootstrap/dist/css/bootstrap.min.css"
import { useUserAuth } from '../Context/UserAuthContext'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ")
  const { login, googleSignin } = useUserAuth();
  const [error, setError] = useState();
  let navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await login(email, password);
      navigate('/home')
    } catch (error) {
      setError(error.message);
    }
  }
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await googleSignin();
      navigate("/home");
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Capital Rush Task</h2>
        {error && <Alert variant="danger">
          {error}
        </Alert>}
        <Form onSubmit={handlesubmit}>
          <Form.Group className='mb-3 input' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Email address'
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className='d-grip gap-2'>
            <Button variant='primary' type='Submit'>
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className='g-btn'
            type='dark'
            onClick={handleGoogleSignin}
          />
        </div>
      </div>
      <div className='p-4 box mt-3 text-center'>
        Don't have an account
        <Link to='/signup'>
          Sign Up
        </Link>
      </div>
    </>
  )
}

export default Login
