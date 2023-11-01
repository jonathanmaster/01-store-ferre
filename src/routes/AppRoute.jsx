import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'
import { AllOffer } from '../home/offer/components/AllOffer'
import { Navbar } from '../home/navbar/Navbar'
import { Footer } from '../home/footer/Footer'

export const AppRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ofertas/:id' element={<AllOffer />} />

        {/*para que navegue directamente  */}
        <Route path='/' element={<Navigate to={<Home />} />} />
        <Route path='/*' element={<Navigate to={<Home />} />} />
        <Route />
      </Routes>
      <Footer />
    </>
  )
}
