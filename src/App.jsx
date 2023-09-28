import { Footer } from './pages/footer/Footer'
import Navbar from './pages/navbar/Nabvar'
import { Home } from './pages/Home'
import { Banner } from './pages/banner/Banner'
import { BannerCard } from './pages/banner/BannerCard'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BannerCard />
      <Home />
      <Footer />
    </>
  )
}

export default App
