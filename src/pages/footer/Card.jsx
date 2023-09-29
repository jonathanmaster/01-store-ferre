import {
  CurrencyDollarIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const posts = [
  {
    id: 1,
    title: 'Calidad y precio',
    description: 'Más de 100 millones de artículos a precios muy competitivos',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      icon: <CurrencyDollarIcon className='h-8 w-8 text-gray-900' />,
    },
  },
  {
    id: 2,
    title: 'Pago seguro',
    description: 'Paga con los métodos más populares y seguros del mundo',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      icon: <CreditCardIcon className='h-8 w-8 text-gray-900' />,
    },
  },
  {
    id: 3,
    title: 'Compra con confianza',
    description:
      'Nuestra Protección del Comprador protege tu compra de principio a fin',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      icon: <ShieldCheckIcon className='h-8 w-8 text-gray-900' />,
    },
  },
  {
    id: 4,
    title: 'Servicio al cliente',
    description: 'Asistencia continua para que compres sin problemas',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      icon: <UserIcon className='h-8 w-8 text-gray-900' />,
    },
  },
]

export default function CardFooter() {
  return (
    <footer className=' py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-16 border-t border-gray-200 pt-8 sm:pt-12 lg:mx-0 lg:max-w-none md:grid-cols-4'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex flex-col max-w-xl items-center justify-center text-center'
            >
              {post.author.icon}
              <div className='group relative'>
                <h3 className='text-lg font-semibold leading-6 text-gray-900 '>
                  <a href={post.href}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </a>
                </h3>
                <p className='mt-3 text-sm leading-6 text-gray-600 '>
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </footer>
  )
}
