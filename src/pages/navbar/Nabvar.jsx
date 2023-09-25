import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  SignalIcon,
  Bars3Icon,
  CogIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  XMarkIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/20/solid'
//
import logo from '../../assets/logo/logo-1.png'

const products = [
  {
    name: 'Herramientas Manuales',
    description: 'Alicates, Hombresolo, Destornilladores...',
    href: '#',
    icon: CogIcon,
  },
  {
    name: 'Herramientas Medición y Nivelación',
    description: 'Multimetros, Probadores, Calibradores...',
    href: '#',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Maquinaria, Herramienta y Mangueras',
    description: 'Guadañas, Sopladoras, Podadoras...',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Maquinaria Especializada',
    description: 'Soldadoras, Generadores, Compresores...',
    href: '#',
    icon: CpuChipIcon,
  },
  {
    name: 'Herramientas Eléctricas e Inalámbricas',
    description: 'Taladros, Pulidoras, Polichadoras...',
    href: '#',
    icon: SignalIcon,
  },
]
// chat-bubble-left-right
const callsToAction = [
  { name: 'Contactame', href: '#', icon: ChatBubbleLeftRightIcon },
  { name: 'WhatsApp', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const cartItemCount = 0

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5 flex items-center'>
            <img className='h-8 w-auto' src={logo} alt='logo' />
            <p className='ml-2 text-black'>Distri - Fontibonsas</p>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300'>
              Productos
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400 hover:text-cyan-500 transition-colors duration-300'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4 '>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-cyan-500 transition-colors duration-300'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900 hover:text-white transition-colors duration-300'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-700'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:text-white hover:bg-cyan-500 transition-colors duration-300'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-900 '
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href='#'
            className='text-sm  leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300'
          >
            Categorias
          </a>
          <a
            href='#'
            className='text-sm  leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300'
          >
            Favoritos
          </a>
          <a
            href='#'
            className='text-sm leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300'
          >
            Mis Compras
          </a>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='#'
            className='relative text-sm font-semibold leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
            {cartItemCount >= 0 && (
              <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                {cartItemCount}
              </span>
            )}
          </a>

          <a
            href='/'
            className='flex px-4 text-black hover:text-cyan-500 transition-colors duration-300'
          >
            <UserIcon className='w-6 h-6' /> Mi Cuenta
          </a>
          <a
            href='#'
            className='text-sm leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300'
          ></a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 '>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Mis Compras</span>
              <img className='h-8 w-auto ' src={logo} alt='' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only '>Close menu</span>
              <XMarkIcon
                className='h-6 w-6 hover:text-cyan-500 transition-colors duration-300 transform hover:scale-110'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors duration-300'>
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            'h-5 w-5 flex-none',
                            'group',
                            open
                              ? 'rotate-180 transition-transform duration-300 ease-in-out '
                              : 'transition-transform duration-300 ease-in-out'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='flex items-center rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors duration-300 group'
                          >
                            <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-colors duration-300'>
                              <item.icon
                                className='h-6 w-6  text-gray-600 group-hover:text-cyan-500'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-2 '>{item.name}</div>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors duration-300'
                >
                  Categorias
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors duration-300'
                >
                  Favoritos
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-cyan-500 hover:text-white transition-colors duration-300'
                >
                  Mis Compras
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='font-semibold leading-6 text-gray-900 hover:text-cyan-500 transition-colors duration-300 flex items-center'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                  {cartItemCount >= 0 && (
                    <span className=' top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                      {cartItemCount}
                    </span>
                  )}
                  <span className=''>Carrito</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
