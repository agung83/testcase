import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from "components/layout"
import { useFormik } from "formik"
import * as Yup from 'yup';


const validation = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    jeniskelamin: "",
    kota: "",
    provinsi: "",
}

const kotaJambi = [
    {
        nama: "Jambi Kota"
    },
    {
        nama: "Muaro Bungo"
    }
]
const kotaSumbar = [
    {
        nama: "Padang Kota"
    },
    {
        nama: "Bukittinggi"
    }
]
export default function register() {
    const [message, setMessage] = useState("")
    const router = useRouter()

    const submited = (value) => {
        console.log(value)
        localStorage.setItem("registrasi", JSON.stringify(value))

        setMessage("Berhasil Registrasi, Halaman Akan di Redirect ke Login Page dalam 3 detik");
        setTimeout(() => {
            router.push('/login')
        }, 3000);
    }

    const formik = useFormik({
        initialValues: validation,
        validationSchema: Yup.object({
            firstname: Yup.string().required('Silahkan Masukan Nama Depan Anda'),
            lastname: Yup.string().required('Silahkan Masukan Nama Belakang Anda'),
            email: Yup.string().email('Kamu Yakin Ini Email?').max(40, 'harus 40 huruf').required('Silahkan masukan email'),
            password: Yup.string()
                .required('Silahkan masukan kata sandi.')
                .min(8, 'Password min 8 char.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            jeniskelamin: Yup.string().required('Silahkan Masukan Jenis Kelamin Anda'),
            kota: Yup.string().required('Silahkan Pilih Kota Anda'),
            provinsi: Yup.number().required('Silahkan Pilih Provinsi Anda'),
        }),
        onSubmit: submited,
    })



    const kota = formik.values.provinsi == 1 ? kotaJambi : formik.values.provinsi == 2 ? kotaSumbar : [];

    return (
        <Layout title="Register Test Case">
            <div className="md:pt-16 lg:pt-16 mb-10 flex justify-center items-center bg-gray-100">
                <form onSubmit={formik.handleSubmit} className="p-8 md:w-3/6 lg:w-3/6 w-full bg-white rounded-xl flex justify-center items-center flex-col shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-600 mb-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>

                    <p className="text-3xl uppercase text-gray-600 mb-3">Register</p>
                    <div className="mb-5 w-full">
                        <input
                            type="text"
                            name="firstname"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            autoComplete="off"
                            placeholder="Masukan Nama Depan Anda"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                            required />
                        {formik.touched.firstname && formik.errors.firstname ? (
                            <div className="text-xl text-green-500 px-5">{formik.errors.firstname}</div>
                        ) : null}
                    </div>
                    <div className="mb-5 w-full">
                        <input
                            type="text"
                            name="lastname"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            autoComplete="off"
                            placeholder="Masukan Nama Belakang Anda"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastname}
                            required />
                        {formik.touched.lastname && formik.errors.lastname ? (
                            <div className="text-xl text-green-500 px-5">{formik.errors.lastname}</div>
                        ) : null}
                    </div>
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

                    <div className="mb-5 w-full">
                        <select
                            name="jeniskelamin"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jeniskelamin}
                        >
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="LAKI" >Laki-Laki</option>
                            <option value="PEREMPUAN" >PEREMPUAN</option>
                        </select>
                        {formik.touched.jeniskelamin && formik.errors.jeniskelamin ? (
                            <div className="text-lg text-green-500 px-5">{formik.errors.jeniskelamin}</div>
                        ) : null}
                    </div>
                    <div className="mb-5 w-full">
                        <select
                            name="provinsi"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.provinsi}
                        >
                            <option value="">Pilih Provinsi</option>
                            <option value="1" >JAMBI</option>
                            <option value="2" >SUMATERA BARAT</option>
                        </select>
                        {formik.touched.provinsi && formik.errors.provinsi ? (
                            <div className="text-lg text-green-500 px-5">{formik.errors.provinsi}</div>
                        ) : null}
                    </div>

                    <div className="mb-5 w-full">
                        <select
                            name="kota"
                            className="p-3 w-full text-xl focus:border-blue-700 rounded border-2 outline-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.kota}
                        >
                            <option value="">Pilih Kota</option>
                            {
                                kota.map((value, key) => (
                                    <option key={key} value={value.nama}>{value.nama}</option>
                                ))
                            }
                        </select>
                        {formik.touched.kota && formik.errors.kota ? (
                            <div className="text-lg text-green-500 px-5">{formik.errors.kota}</div>
                        ) : null}
                    </div>
                    {
                        message == "" ?
                            (
                                null
                            ) :
                            (
                                <div className="px-3 py-5 bg-blue-300 text-black w-full">{message}</div>
                            )
                    }
                    <button className="bg-blue-600 mt-10 hover:bg-blue-900 text-xl text-white font-bold p-2 rounded w-full" id="login" type="submit">
                        <span>Registrasi</span>
                    </button>
                </form>
            </div>
        </Layout>
    )
}
