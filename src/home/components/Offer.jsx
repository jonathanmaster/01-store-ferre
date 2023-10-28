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
      <h2 className='my-5 text-4xl text-center text-gray-900 '>Ofertas</h2>

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
          <SwiperSlide key={product.id} className='p-6 swiper-slide'>
            <article
              key={product.id}
              className='w-56 p-3 duration-300 bg-white rounded-md shadow-lg h-80 hover:shadow-xl hover:transform hover:scale-105 '
            >
              <Link>
                <div className='relative flex items-center overflow-hidden '>
                  <small className='absolute rounded-sm mb-44 p-0.5 text-white font-semibold bg-green-500'>
                    -22%
                  </small>
                  <img
                    src={product.img}
                    alt='Hotel Photo'
                    className='w-52 h-52'
                  />
                </div>

                <div className='flex flex-col items-center p-2 text-center'>
                  <h2 className='text-slate-700'>
                    {product.name.length > 40
                      ? `${product.name.substring(0, 40)}...`
                      : product.name}
                  </h2>

                  <p className='text-lg font-bold '>${product.price}</p>
                </div>
              </Link>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
