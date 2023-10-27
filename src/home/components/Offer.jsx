import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { products } from '../../helpers/getOffer'

import '../index.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

export const Offer = () => {
  return (
    <div className='m-7 '>
      <h2 className='text-4xl text-center my-5 text-gray-900 '>Ofertas</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ hide: true }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className='swiper-slide p-6'
            noSwipingClass='stop-swiping'
          >
            <Link className=''>
              <div className='relative flex w-56 items-center h-96 flex-col rounded-md bg-white bg-clip-border text-gray-900 shadow-lg hover:shadow-xl hover:transform  hover:scale-105 duration-300'>
                <div className='relative mx-4 mt-4 h-96  bg-clip-border text-gray-900'>
                  <small className='absolute rounded-sm ml-auto p-0.5 text-white font-semibold bg-green-500'>
                    -22%
                  </small>
                  <img
                    src={product.img}
                    className='h-52 w-full object-cover '
                  />
                </div>
                <div className='p-2'>
                  <div className='mb-2  text-center'>
                    <p className='block text-lg  leading-relaxed text-blue-gray-900 antialiased'>
                      {product.name}
                    </p>
                    <p className='block text-lg  font-bold leading-relaxed text-blue-gray-900 antialiased'>
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
