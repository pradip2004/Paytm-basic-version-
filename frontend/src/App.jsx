import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Deshboard from './pages/Deshboard'
import Sendmoney from './pages/Sendmoney'
function App() {
  const isAuthenticated = localStorage.getItem("token") !== "";
  return (
    <>
        <BrowserRouter>
          <Routes>
          {isAuthenticated ? (
          <>
            <Route path='/' element={<Deshboard />} />
            <Route path='/dashboard' element={<Deshboard />} />
            <Route path='/send' element={<Sendmoney />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
          </>
        )}
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
