import { memo, useState, useCallback } from "react"
import Modal from "../modal"



const CardBerita = ({ data, title, subtitle }) => {
    let [isOpen, setIsOpen] = useState(false)
    let [detailBerita, setDetail] = useState({})

    const closeModal = useCallback(() => setIsOpen(false), [])

    const DetailBerita = (detail) => {
        setIsOpen(true)
        setDetail(detail);
    }

    return (
        <>
            <div className="bg-blue-500 p-5 rounded-3xl  mb-5 shadow-2xl dark:bg-gray-800">
                <section className="container py-5 bg-white mb-10  rounded-3xl dark:bg-gray-800">
                    <div className=" mx-auto sm:px-6 lg:px-8">
                        <div className="lg:text-center text-center ">
                            <p className="mt-2 text-2xl leading-5 font-extrabold tracking-tight text-yellow-500  sm:text-4xl dark:text-white">
                                {title}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nesciunt? Aut blanditiis nostrum amet laboriosam animi dolorum ex nesciunt. Omnis aspernatur ex recusandae cumque nesciunt quo perspiciatis maxime sequi quia!
                            </p>
                            <p className="mt-4 mb-5 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-white">
                                {subtitle}
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus non ipsam fugit laudantium fugiat autem quisquam numquam ratione rerum aperiam exercitationem itaque architecto ipsa, iusto praesentium cum fuga quibusdam molestias!
                            </p>
                        </div>
                        <div className=" bg-white dark:bg-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet minus rem itaque placeat error rerum eius numquam sunt pariatur! Exercitationem qui non tempore! Aliquid inventore quos voluptate dolore deserunt?
                            {
                                data.map((pecah, key) => (
                                    <article key={key} className="space-y-4 shadow-xl dark:bg-gray-700 bg-white py-4 px-3 md:py-10 lg:py-10 md:px-5 lg:px5  border border-gray-200 dark:border-blue-400">
                                        <div className="space-y-2">
                                            <div className="flex flex-row text-base md:text-xl lg:text-xl">
                                                <h3 className="flex-1 font-semibold  text-gray-700 dark:text-white truncate">{pecah.title}</h3>
                                                <span className=" text-gray-500 dark:text-white text-base ml-4 mt-1 truncate">{pecah.publishedAt}</span>
                                            </div>
                                            <div className="text-gray-600 md:text-xl lg:text-xl text-xs dark:text-white">
                                                <p>
                                                    {pecah.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <button onClick={() => DetailBerita(data[key])} className="flex flex-row-reverse items-center justify-center px-4 py-2 shadow-sm font-medium text-sm md:text-xl lg:text-xl text-blue-500 focus:ring-2 focus:ring-offset-2 hover:bg-green-100  border border-blue-400 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Read More
                                            </button>
                                            <div className="text-sm dark:text-white hidden md:block lg:block">
                                                {pecah.author}
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <Modal closeModal={closeModal} isOpen={isOpen} >
                <h3 className="md:text-2xl lg:text-2xl text-base mb-4 font-medium leading-6 text-gray-900 dark:text-white ">
                    {detailBerita.title}
                </h3>
                <div className="mt-2 mb-4">
                    <p className="md:text-xl lg:text-xl text-sm text-gray-500 dark:text-white">
                        {detailBerita.content}
                    </p>
                </div>
                <a href={detailBerita.url} target="_blank" className="md:text-xl lg:text-xl text-sm text-blue-500">
                    Lihat Sumber
                </a>
                <div className="mt-7">
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 md:text-xl lg:text-xl text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                    >
                        Tutup
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default memo(CardBerita);
