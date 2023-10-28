import { Link } from 'react-router-dom'
import { products } from '../../helpers/getProducts'

export const AllProducts = () => {
  return (
    <div>
      <h2 className='mt-5 text-4xl text-center text-gray-900'>
        Algunos Productos
      </h2>
      <section className='py-5'>
        <div className='grid max-w-5xl grid-cols-1 p-6 mx-auto gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
          {products.map((product) => (
            <article
              key={product.id}
              className='w-56 p-3 duration-300 bg-white rounded-md shadow-lg h-80 hover:shadow-xl hover:transform hover:scale-105 '
            >
              <Link>
                <div className='relative flex items-center overflow-hidden '>
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
          ))}
        </div>
      </section>
    </div>
  )
}
