import { categories } from './categories'

export const AllCategoriesSlider = () => {
  return (
    <div className='m-7 mt-10'>
      <h1 className='text-4xl text-center my-5 text-gray-900'>
        Categorías Destacadas
      </h1>

      <div className='flex flex-wrap justify-center bg-white'>
        {categories.map((item) => (
          <div
            key={item.name}
            className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center text-xl border border-gray-300'
          >
            <a
              href='#'
              className='h-full p-5 flex flex-col justify-center items-center relative group opacity-80 transition-opacity duration-300 hover:opacity-100 hover:bg-green-500'
            >
              <img src={item.icon} className='w-14 mx-auto' alt={item.name} />
              <h3>{item.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
