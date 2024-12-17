import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import { Col, Container, Row } from 'react-bootstrap'
import Signup from './Components/Signup'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/home' element={<ProtectedRoute>
                <Home />
              </ProtectedRoute>} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container >
  )
}

export default App

// 7 mins