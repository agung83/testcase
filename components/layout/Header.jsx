

export default function Header() {

    return (
        <>
            <section className="container px-4 py-7 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center ">
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                    <h1 className="text-3xl leading-snug text-blue-500 dark:text-gray-200 md:text-4xl">
                        <span className="font-semibold">Selamat Datang {dataUser.firtsname}</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Bagi siswa yang tamat atau lulus tahun 2022 dan bersekolah di dalam
                        provinsi sumatera barat dapat melihat kelengkapan data sdi bawah ini
                        dengan memasukan nik/nisnssss</p>

                    <div className="mt-6 bg-transparent border rounded-md dark:border-gray-700 lg:w-2/3 focus-within:border-teal-500 focus-within:ring focus-within:ring-primary dark:focus-within:border-teal-500 focus-within:ring-opacity-40">
                        <form action="/search" className="flex flex-wrap justify-between md:flex-row">
                            <input type="search" name="query" className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 border-purple-600" placeholder="Masukan NIK/NISN" required />
                            <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-200  rounded-md lg:w-12 lg:h-12 lg:p-0 bg-blue-500 hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-full mt-4 lg:mt-0 lg:w-1/2">

                    <img className="w-full h-full max-w-md mx-auto" src="/static/images/website-designer-bro.svg" alt="web designer" />
                </div>
            </section>
        </>
    )
}
