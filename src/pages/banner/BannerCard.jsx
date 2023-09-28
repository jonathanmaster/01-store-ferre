import bannerRight from '../../assets/banner/banner-right.jpeg'
import bannerLeft from '../../assets/banner/banner-left.jpeg'

export const BannerCard = () => {
  return (
    <div className='relative flex flex-wrap justify-center bg-slate-100'>
      <div className='m-4 relative'>
        <figure>
          <img
            src={bannerLeft}
            alt='Shoes'
            className='w-full h-auto rounded-md'
          />
        </figure>
        <div className='absolute bottom-0 right-3 p-4'>
          <button className='btn btn-outline btn-info md:text-lg lg:text-xl xl:text-2xl'>
            Ver más
          </button>
        </div>
      </div>
      <div className='m-4 relative '>
        <figure>
          <img
            src={bannerRight}
            alt='Shoes'
            className='w-full h-auto rounded-md'
          />
        </figure>
        <div className='absolute bottom-0 right-3 p-4'>
          <button className='btn btn-outline btn-info md:text-lg lg:text-xl xl:text-2xl'>
            Ver más
          </button>
        </div>
      </div>
    </div>
  )
}
