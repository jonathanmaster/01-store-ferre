import { Link } from 'react-router-dom'
import { products } from '../../helpers/getOffer'

export const AllProducts = () => {
  return (
    <div>
      <h2 className='text-4xl text-center mt-5 text-gray-900'>
        Algunos Productos
      </h2>
      <section className='py-5'>
        <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((product) => (
            <article
              key={product.id}
              className='rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '
            >
              <Link>
                <div className='relative flex items-center overflow-hidden rounded-xl'>
                  <img src={product.img} alt='Hotel Photo' />
                </div>

                <div className='mt-1 p-2 text-center    '>
                  <h2 className='text-slate-700'>{product.name}</h2>

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
