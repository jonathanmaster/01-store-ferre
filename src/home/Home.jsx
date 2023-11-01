import { Banner } from './banner/Banner'
import { AllCategoriesSlider } from './categories/AllCategoriesSlider'
import { Offer } from './components/Offer'
import { SectionCard } from './components/SectionCard'
import { ButtonSlider } from './banner/button-slider/ButtonSlider'
import { BannerCard } from './banner/BannerCard'
import { AllProducts } from './components/AllProducts'

export const Home = () => {
  return (
    <>
      <div className='w-full p-0 m-0 '>
        <Banner />
        <ButtonSlider />
        <Offer />
        <BannerCard />
        <AllCategoriesSlider />
        <SectionCard />
        <AllProducts />
      </div>
    </>
  )
}
