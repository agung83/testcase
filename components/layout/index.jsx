import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ title, theme, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="min-h-screen flex flex-col">
                <div className="bg-gray-200 h-24">
                    <Navbar />
                </div>
                <div className="flex-grow">
                    {children}
                </div>
                <div className="bg-gray-200">
                    <Footer />
                </div>
            </div>
        </>
    )
}
