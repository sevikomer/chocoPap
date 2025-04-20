import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


export default function ModalContent({ closeModal, productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {
  const totalPrice = (cartItems.reduce((price, cartItem) => price + cartItem.quantity * cartItem.price, 0)).toFixed(2)
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Mon panier</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                  <div className='my-12 text-xl'>
                    {cartItems.length === 0 && (<div>Votre panier est vide.</div>)}
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((cartItem) => (
                          <li key={cartItem.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={`/${cartItem.image}`} alt='' className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={cartItem.href}>{cartItem.title}</a>
                                  </h3>
                                  <p className="ml-4">{cartItem.price} €</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qté : {cartItem.quantity}</p>

                                <div className="flex">
                                  <button type="button" onClick={handleRemoveProduct} className="font-medium text-yellow hover:text-orange">
                                    Effacer
                                  </button>
                                </div>
                              </div>
                              <div className='flex'>
                                <button className='flex items-center justify-center m-1 px-2 py-1 text-white  bg-yellow hover:bg-orange' onClick={() => handleAddProduct(cartItem)}>+</button>
                                <button className='flex items-center justify-center m-1 px-2 py-1 text-white  bg-yellow hover:bg-orange' onClick={() => handleRemoveProduct(cartItem)}>-</button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>{totalPrice} €</p>
                  </div>
                  <div className="mt-6 flex items-center justify-center ">
                    <button
                      type='button'
                      onClick={handleCartClearance}
                      className="px-6 py-3 text-base font-medium text-yellow shadow-xs hover:text-orange"
                    >
                      Réinitialiser mon panier
                    </button>
                  </div>
                  <div className="mt-6">
                    <a
                      href='a'
                      className="flex items-center justify-center rounded-md border border-transparent bg-yellow px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-orange"
                    >
                      Valider mon panier
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ou{' '}
                      <button
                        type="button"
                        onClick={closeModal}
                        className="font-medium text-yellow hover:text-orange"
                      >
                        Continuer mes achats
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}