// import { Link } from 'react-router-dom'

export const SectionCard = () => {
  return (
    <section className=' m-7 mt-20'>
      <h2 className='text-4xl text-center mt-10 text-gray-900'>
        Descubre Herramientas Por Categoría
      </h2>
      <div className='grid lg:grid-cols-3 gap-4 lg:gap-4 sm:grid-cols-2 place-items-center mb-4 p-5'>
        <div className='bg-white hover:scale-105 duration-500 rounded-lg cursor-pointer'>
          <img
            className='w-96 h-52 object-cover rounded-lg cursor-pointer'
            src='https://http2.mlstatic.com/D_NQ_NP866153-MLA52702036818_122022-B.webp'
            alt=''
          />
          <h2 className='text-gray-800 text-lg font-semibold text-center'>
            Herramientas Eléctricas
          </h2>
        </div>
        <div className='bg-white hover:scale-105 duration-500'>
          <img
            className='w-96 h-52 object-cover rounded-lg cursor-pointer'
            src='https://http2.mlstatic.com/D_NQ_NP717060-MLA52702116518_122022-B.webp'
            alt=''
          />
          <h2 className='text-gray-800 text-lg font-semibold text-center'>
            Herramientas Manuales
          </h2>
        </div>
        <div className='bg-white hover:scale-105 duration-500'>
          <img
            className='w-96 h-52 object-cover rounded-lg cursor-pointer'
            src='https://http2.mlstatic.com/D_NQ_NP703554-MLA52702036839_122022-B.webp'
            alt=''
          />
          <h2 className='text-gray-800 text-lg font-semibold text-center'>
            Herramientas para Jardín
          </h2>
        </div>
        <div className='bg-white hover:scale-105 duration-500'>
          <img
            className='w-96 h-52 object-cover rounded-lg cursor-pointer'
            src='https://http2.mlstatic.com/D_NQ_NP909852-MLA52702036854_122022-B.webp'
            alt=''
          />
          <h2 className='text-gray-800 text-lg font-semibold text-center'>
            Instrumento De Medición
          </h2>
        </div>
        <div className='bg-white hover:scale-105 duration-500'>
          <img
            className='w-96 h-52 object-cover rounded-lg cursor-pointer'
            src='https://http2.mlstatic.com/D_NQ_NP830897-MLA52702012956_122022-B.webp'
            alt=''
          />
          <h2 className='text-gray-800 text-lg font-semibold text-center'>
            Accesorio Para Herramientas
          </h2>
        </div>
        <div className='bg-white hover:scale-105 duration-500'>
          <img
            className='w-96 h-52 object-cover rounded-lg cursor-pointer'
            src='https://http2.mlstatic.com/D_NQ_NP813997-MLA52702036868_122022-B.webp'
            alt=''
          />
          <h2 className='text-gray-800 text-lg font-semibold text-center'>
            Herramientas Industriales
          </h2>
        </div>
      </div>
    </section>
  )
}
// hover:scale-105 duration-500
