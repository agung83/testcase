import { useState } from "react";
import { useRouter } from 'next/router'
import Layout from "components/layout"
import Link from 'next/link'
import { useFormik } from "formik"
import * as Yup from 'yup';

const validation = {
    email: "",
    password: "",
}

export default function login() {
    const [message, setMessage] = useState("")
    const router = useRouter()

    const submited = (value, { resetForm }) => {
        const user = JSON.parse(localStorage.getItem('registrasi'))

        if (user != null) {
            if (user.email === value.email && user.password === value.password) {
                setMessage("Berhasil Login")
                resetForm({})
                setTimeout(() => {
                    router.push('/')
                }, 1000);
            } else {
                setMessage('Gagal Login')
            }
        } else {
            setMessage("Silahkan Registrasi Terlebih Dahulu")
            resetForm({})
        }

        alert(JSON.stringify(value))

    }

    const formik = useFormik({
        initialValues: validation,
        validationSchema: Yup.object({
            email: Yup.string().email('Kamu Yakin Ini Email?').max(40, 'harus 40 huruf').required('Silahkan masukan email'),
            password: Yup.string()
                .required('Silahkan masukan kata sandi.')
                .min(8, 'Password min 8 char.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

        }),
        onSubmit: submited,
    })
    return (
        <Layout title="Login Test Case">
            <div className="md:pt-20 lg:pt-20 flex justify-center items-center bg-gray-100">
                <form onSubmit={formik.handleSubmit} className="p-8 w-full md:w-3/6 lg:w-3/6  bg-white rounded-xl flex justify-center items-center flex-col shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    {
                        message == "" ?
                            (
                                null
                            ) :
                            (
                                <div className="px-3 py-5 bg-blue-300 text-black w-full">{message}</div>
                            )
                    }
                    <p className="text-3xl uppercase text-gray-600 mb-3">Login</p>
                    <div className="mb-5 w-full">
                        <input
                            type="email"
                            name="email"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            autoComplete="off"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            required />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-xl text-green-500 px-5">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-5 w-full">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            autoComplete="off"
                            placeholder="Password"
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-lg text-green-500 px-5">{formik.errors.password}</div>
                        ) : null}
                    </div>


                    <div className="flex flex-col md:flex-row lg:flex-row w-full ">
                        <div className="px-5 mb-5 md:mb-0 lg:mb-0">
                            <button className="bg-blue-600  hover:bg-blue-900 text-xl text-white font-bold p-2 rounded w-full md:w-96 lg:w-96" id="login" type="submit">
                                <span>Login</span>
                            </button>
                        </div>
                        <div className="px-5">
                            <Link href="/register">
                                <button className="bg-green-600 hover:bg-green-900 text-xl text-white font-bold p-2 rounded w-full md:w-96 lg:w-96" id="register" type="button">
                                    <span>Registrasi</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
