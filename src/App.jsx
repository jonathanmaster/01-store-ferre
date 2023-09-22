import { Outlet } from 'react-router-dom'
import { Footer } from './pages/shared-Pages/Footer'
import Navbar from './pages/navbar/Nabvar'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
