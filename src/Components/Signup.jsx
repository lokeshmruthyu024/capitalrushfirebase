import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ")
  const { signup } = useUserAuth();
  const [error, setError] = useState();
  let navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signup(email, password);
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div className='p-4 box'>
        <h2 className='mb-3'>Capital Rush Task</h2>
        {error && <Alert variant="danger">
          {error}
        </Alert>}
        <Form
          onSubmit={handlesubmit}
        >
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Email address'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className='d-grip gap-2'>
            <Button variant='primary' type='submit'>
              Sign Up
            </Button>
          </div>
        </Form>
      </div >
      <div className='p-4 box mt-3 text-center'>
        Already have an account ?
        <Link to='/login'>
          Log Up
        </Link>
      </div>
    </>
  )
}

export default Signup
