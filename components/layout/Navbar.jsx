import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'


export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [dataUser, setdataUser] = useState(null)
    const [isMounted, setIsMounted] = useState(false);

    const switchTheme = () => {
        console.log(theme)
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    const Logout = () => {
        localStorage.removeItem('registrasi')
        window.location.reload()
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('registrasi'));
        setIsMounted(true);
        setdataUser(data)
    }, []);

    return (
        <Popover className="bg-white dark:bg-gray-900 sticky top-0 z-50 ">
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 dark:border-gray-700">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <a className="md:ml-10 lg:ml-10">
                                <span className="sr-only">Workflow</span>
                                <Image src="/static/images/logo.png" alt="me" width="234" height="44" />

                            </a>
                        </Link>

                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden md:flex items-center pr-6  justify-end md:flex-1 lg:w-0">
                        <button onClick={switchTheme} className="pr-6 transform transition duration-300 hover:scale-110" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </button>

                        <Link href="/register">
                            <a className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700 dark:bg-gray-700"
                            >

                                Register
                            </a>
                        </Link>
                        {
                            dataUser != null ?
                                (
                                    <button type="button" onClick={Logout} className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700 dark:bg-gray-700">
                                        Logout
                                    </button>
                                )
                                :
                                (
                                    <Link href="/login">
                                        <a
                                            className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700 dark:bg-gray-700"
                                        >
                                            Login
                                        </a>
                                    </Link>
                                )
                        }
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Image
                                        className="h-8 w-auto"
                                        src="/static/images/logo.png" alt="me" width="234" height="44"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <Link href="/register">
                                    <a className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700 dark:bg-gray-700"
                                    >
                                        Register
                                    </a>
                                </Link>
                                {
                                    dataUser != null ?
                                        (
                                            <button type="button" onClick={Logout} className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700 dark:bg-gray-700">
                                                Logout
                                            </button>
                                        )
                                        :
                                        (
                                            <Link href="/login">
                                                <a
                                                    className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700 dark:bg-gray-700"
                                                >
                                                    Login
                                                </a>
                                            </Link>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
