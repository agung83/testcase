import { useEffect, useState } from "react"


export default function Header() {
    const [dataUser, setdataUser] = useState(null)
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('registrasi'));
        setdataUser(data)
    }, [])
    return (
        <>
            <section className="container px-4 py-7 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center ">
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                    <h1 className="text-3xl leading-snug text-blue-500 dark:text-gray-200 md:text-4xl">
                        <span className="font-semibold">{dataUser == null ? "Sagara Teknologi TestCase" : `Selamat Datang ${dataUser.firstname} ${dataUser.lastname}`}</span>
                    </h1>
                </div>
                <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full max-w-md mx-auto" src="/static/images/website-designer-bro.svg" alt="web designer" />
                </div>
            </section>
        </>
    )
}
