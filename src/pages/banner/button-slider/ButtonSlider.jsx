import { PhoneIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import './style.css'

export const ButtonSlider = () => {
  return (
    <div className='container-button my-4 bg-gray-100 p-3 rounded-md justify-center items-center w-full'>
      <a className='link-together mr-2 hover:underline hover:text-blue-700 cursor-pointer '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icones-together icon icon-tabler icon-tabler-brand-whatsapp mr-2 '
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
          <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
        </svg>
        Venta por WhatsApp
      </a>
      <a className='link-together mr-2  hover:underline hover:text-blue-700 cursor-pointer'>
        <ShoppingBagIcon className='icones-together h-5 2-5 sm:m-auto' /> Compra
        y Recoge en Tienda
      </a>
      <a
        className='link-together hover:underline hover:text-blue-700 cursor-pointer '
        href='tel: +573124488144'
      >
        <PhoneIcon className='icones-together h-5 w-5 sm:m-auto' /> Venta
        Telefónica
      </a>
    </div>
  )
}
