
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'




const Modal = ({ closeModal, openModal, isOpen, withButton = false, titleButton, styleButton, children }) => {
    return (
        <>
            {
                withButton ?
                    (
                        <button
                            type="button"
                            onClick={openModal}
                            className={styleButton}
                        >
                            {titleButton}
                        </button>
                    ) :
                    (
                        null
                    )
            }
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center bg-black bg-opacity-30  mx-auto">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block max-w-5xl  p-6 my-8 overflow-hidden text-left align-middle transition-all transform dark:bg-gray-700 bg-white shadow-xl rounded-2xl">
                                {children}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal;
