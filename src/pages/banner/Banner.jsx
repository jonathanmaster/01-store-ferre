import banner from '../../assets/banner/banner-1.jpeg'

export const Banner = () => {
  return (
    <div className='w-full relative'>
      <div className='aspect-w-16 aspect-h-9'>
        <img
          src={banner}
          alt='Banner de publicidad'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}
