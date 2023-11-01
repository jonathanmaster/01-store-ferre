import { Link } from 'react-router-dom'
import CardFooter from './Card'
import pum from '../../assets/footer/pum.png'
import sic from '../../assets/footer/sic.png'

export const Footer = () => {
  return (
    <>
      <footer className='absolute w-full text-black bg-white rounded footer footer-center '>
        <CardFooter />
        <nav className='grid grid-flow-col gap-4'>
          <Link className='link link-hover'>Termino Y Condiciones</Link>
          <Link className='link link-hover'>Cómo Respetamos Tu Privacidad</Link>
          <Link className='link link-hover'>Quiénes Somos</Link>
          <Link className='link link-hover'>Nuestra Tienda</Link>
        </nav>
        <nav>
          <div className='grid grid-flow-col gap-4'>
            <a
              className='duration-500 cursor-pointer hover:scale-105'
              href='https://walink.co/1c72b0'
              target='blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='34'
                viewBox='0 0 50 50'
                className='text-green-700 fill-current '
              >
                <path d='M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z'></path>
              </svg>
            </a>
            <a
              className='duration-500 cursor-pointer hover:scale-105'
              href='https://www.instagram.com/distriiluminacionesfontibon/'
              target='blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='34'
                viewBox='0 0 50 50'
                className='fill-current text-rose-600'
              >
                <path d='M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z'></path>
              </svg>
            </a>
            <a
              className='duration-500 cursor-pointer hover:scale-105'
              href='https://www.facebook.com/distriiluminacionesfontibon'
              target='blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='34'
                viewBox='0 0 24 24'
                className='text-blue-700 fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </nav>
        <nav className='grid grid-flow-col gap-4'>
          <a
            href='https://www.sic.gov.co/pare-y-compare'
            className='duration-500 hover:scale-105'
          >
            <img src={pum} alt='Precio por Unidad' />
          </a>
          <a
            href='https://www.sic.gov.co/'
            className='duration-500 hover:scale-105'
          >
            <img src={sic} alt='industria y comercio' />
          </a>
        </nav>
        <aside className='mb-1 font-semibold'>
          <p>Copyright © 2023 - Distriluminaciones Fontibon S.A.S</p>
        </aside>
      </footer>
    </>
  )
}
