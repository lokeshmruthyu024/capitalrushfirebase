import React from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useUserAuth } from '../Context/UserAuthContext'

const Home = () => {
  const { user, logout } = useUserAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>
      <div className='p-4 box mt-3 text-center'>Hello Welcome
        <br />
        {user && user.email}
      </div>
      <div className='d-grip gap-2'>
        <Button variant="primary" onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  )
}

export default Home
