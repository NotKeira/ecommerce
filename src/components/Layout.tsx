import React from 'react';
import Head from 'next/head';
import {useRouter} from "next/router";
import LoginBtn from './login-btn';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    const router = useRouter();
    return (<div className="flex flex-col min-h-screen">
            <Head>
                <title>My E-commerce Website</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">My E-commerce Website</h1>
                    <nav className="mt-4 flex justify-center">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/"
                                   className={"nav-link" && router.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/products"
                                   className={"nav-link" && router.pathname === '/products' ? 'nav-link active' : 'nav-link'}>
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/contact"
                                   className={"nav-link" && router.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white text-gray-800 py-2 px-4 rounded"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-4.35-4.35"
                                    />
                                </svg>
                            </button>
                        </div>
                        <LoginBtn/>
                    </div>

                </div>
            </header>
            <main className="flex-grow container mx-auto py-6 px-4">{children}</main>
            <footer className="bg-gray-900 text-white py-4 px-6 text-center">
                <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
            </footer>

            <style jsx>{`
              .nav-link {
                position: relative;
                display: inline-block;
                padding: 0.25em 0.5em;
                border-radius: 9999px;
                background-color: #4a5568;
                color: #fff;
                transition: background-color 0.3s ease;
              }

              .nav-link::before {
                content: '';
                position: absolute;
                top: -0.25em;
                left: -0.25em;
                right: -0.25em;
                bottom: -0.25em;
                border-radius: 9999px;
                background-color: #4a5568;
                z-index: -1;
              }

              .nav-link::before .active {
                background-color: #3182ce;
              }

              .active {
                background-color: #3182ce;
                border-color: #3182ce;
                font-weight: bold;
              }

              .nav-link:hover {
                background-color: #38a169;
              }
            `}</style>
        </div>);
};

export default Layout;
