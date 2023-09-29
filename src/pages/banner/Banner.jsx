import { useEffect, useState } from 'react'
import banner1 from '../../assets/banner/sliders/banner-1.png'
import banner2 from '../../assets/banner/sliders/banner-2.png'
import banner3 from '../../assets/banner/sliders/banner-3.png'

import '../../index.css'

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar automáticamente al siguiente slide
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1)
    }, 5000) // Cambiar cada 5 segundos (ajusta el valor según tus preferencias)

    return () => {
      // Limpieza del intervalo cuando el componente se desmonta
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='carousel w-full carrusel-banner'>
      <div
        id='slide1'
        className={`carousel-item relative w-full transform transition-transform duration-600 ease-in-out ${
          currentSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <img src={banner1} className='m-auto' />
      </div>

      {/* slide2 */}
      <div
        id='slide2'
        className={`carousel-item relative w-full transform transition-transform duration-600 ease-in-out ${
          currentSlide === 2 ? 'block' : 'hidden'
        }`}
      >
        <img src={banner2} className='w-full' />
      </div>

      {/* slide3 */}
      <div
        id='slide3'
        className={`carousel-item relative w-full transform transition-transform duration-600 ease-in-out ${
          currentSlide === 3 ? 'block' : 'hidden'
        }`}
      >
        <img src={banner3} className='w-full' />
      </div>

      {/* slide4 */}
      {/* <div
        id='slide4'
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? 'block' : 'hidden'
        }`}
      >
        <img src={banner} className='w-full' />

        <div className='absolute bottom-0 right-3 p-4'>
          <button className='btn btn-outline btn-info md:text-lg lg:text-xl xl:text-2xl'>
            Ver más
          </button>
        </div>
      </div> */}
    </div>
  )
}
