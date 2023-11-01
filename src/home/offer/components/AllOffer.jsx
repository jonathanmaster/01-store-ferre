// import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getProductsById } from '../helpers/getProductsById'
import { useMemo } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useCounter } from '../hooks/useCounter'

import nequi from '../../../assets/pay/pse-nequi-daviplata.webp'
import datafono from '../../../assets/pay/datafonos.webp'

export const AllOffer = () => {
  const { id } = useParams()
  const { counter, increment, decrement } = useCounter()

  const product = useMemo(() => getProductsById(id), [id])

  if (!product) {
    return <Navigate to='/' />
  }

  return (
    <div className='flex flex-col w-screen h-full md:flex-row lg:px-14 sm:py-7 sm:mb-7'>
      {/* My Cart */}
      <div className='flex flex-col w-full gap-4 sm:p-4 h-fit'>
        {/* Product */}
        <div className='flex flex-col p-4 text-lg font-semibold bg-white border rounded-sm shadow-md'>
          <div className='flex flex-col justify-between gap-3 '>
            {/* Product Information */}
            <div className='flex flex-col items-center gap-6 '>
              <div className='flex flex-col gap-1'>
                <p className='text-lg font-semibold text-gray-800'>
                  {product.name}
                </p>
                <div className='flex items-center'>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <svg
                    className='w-5 h-5 text-green-500 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <mask id='half-star-mask'>
                      <rect
                        x='0'
                        y='0'
                        width='50%'
                        height='100%'
                        fill='white'
                      />
                      <rect
                        x='50%'
                        y='0'
                        width='50%'
                        height='100%'
                        fill='black'
                      />
                    </mask>
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292'
                      mask='url(#half-star-mask)'
                    ></path>
                  </svg>
                  <p className='text-sm'>4,6</p>
                </div>
              </div>

              <div className='h-56 w-72'>
                <img
                  className='w-full h-full'
                  src={product.img}
                  alt={product.name}
                />
              </div>
            </div>
            {/* Price Information */}
            <div className='font-semibold'>
              <p className='text-sm font-normal text-gray-800 line-through'>
                ${product.price}
              </p>
              <p className='text-xl text-gray-800'>
                ${product.discount} und
                <small className='ml-1 text-green-500'>22%</small>
              </p>
            </div>
            <button className='h-8 text-sm text-blue-700 border rounded-md w-36 btn-outline '>
              Guardar en Mi Lista
            </button>
          </div>
          {/* Product Quantity */}
          <div className='flex flex-row self-center gap-1 mt-1'>
            <button
              onClick={() => counter > 1 && decrement(1)}
              className='self-center w-5 h-5 border border-gray-300 rounded-full'
            >
              <MinusIcon />
            </button>
            <input
              type='text'
              readOnly
              value={counter}
              className='w-8 h-8 text-sm text-center text-gray-900 border border-gray-300 rounded-sm outline-none'
            />
            <button
              onClick={() => increment(1)}
              className='self-center w-5 h-5 border border-gray-300 rounded-full'
            >
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Purchase Resume */}
      <div className='flex flex-col w-full gap-4 sm:p-4 md:w-2/3 h-fit'>
        <div className='flex flex-col gap-4 p-4 text-lg font-semibold bg-white border rounded-sm shadow-md'>
          <div className='flex flex-row justify-between'>
            <p className='text-gray-600'>Subtotal ({counter} Items)</p>
            <p className='font-bold text-end'>
              ${(product.discount * counter).toFixed(3)}
            </p>
          </div>
          <hr className='bg-gray-200 h-0.5' />
          <div className='flex flex-row justify-between'>
            <p className='text-gray-600'>Medios De Pago</p>
            <div className='flex w-auto'>
              <img className='w-32' src={nequi} alt='img-nequi' />
              {/* <img className='w-11' src={datafono} alt='img-datafono' /> */}
            </div>
          </div>
          <hr className='bg-gray-200 h-0.5' />
          <div className='flex flex-row justify-between'>
            <p className='text-gray-600'>Discount Coupon</p>
            <a className='text-base text-gray-500 underline' href='#'>
              Add
            </a>
          </div>
          <hr className='bg-gray-200 h-0.5' />
          <div className='flex flex-row justify-between'>
            <p className='text-gray-600'>Total</p>
            <div>
              <p className='font-bold text-end'>$103.88</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <button className='w-full p-2 text-sm text-white transition-colors bg-blue-600 rounded-sm shadow-md hover:bg-blue-700 text-hover'>
              FINISH
            </button>
            <button className='w-full p-2 text-sm text-gray-700 transition-colors bg-white border border-gray-600 rounded-sm shadow-md text-hover'>
              ADD MORE PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
