import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Deshboard from './pages/Deshboard'
import Sendmoney from './pages/Sendmoney'
function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/deshboard' element={<Deshboard/>}/>
            <Route path='/send' element={<Sendmoney/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
