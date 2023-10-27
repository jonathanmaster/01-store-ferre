import bannerRight from '../../assets/banner/banner-right.jpeg'
import bannerLeft from '../../assets/banner/banner-left.jpeg'

import './style.css'

export const BannerCard = () => {
  return (
    <div className='container-bannerCard relative flex justify-center'>
      <div className='m-4 relative w-96 '>
        <figure>
          <img
            src={bannerLeft}
            alt='Shoes'
            className='w-full h-auto rounded-md'
          />
        </figure>
        <div className='absolute bottom-0 right-3 p-4 '>
          <button className='btn btn-outline md:text-sm hover:bg-green-500 hover:border-white text-white'>
            Ver más
          </button>
        </div>
      </div>
      <div className='m-4 relative w-96 '>
        <figure>
          <img
            src={bannerRight}
            alt='Shoes'
            className='w-full h-auto rounded-md'
          />
        </figure>
        <div className='absolute bottom-0 right-3 p-4 '>
          <button className='btn btn-outline  md:text-sm hover:bg-green-500 hover:border-white text-white'>
            Ver más
          </button>
        </div>
      </div>
    </div>
  )
}
