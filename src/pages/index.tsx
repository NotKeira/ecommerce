import React from 'react';
import Layout from '../components/Layout';
import {useSession} from 'next-auth/react';


const Home = () => {
// @ts-ignore
    return (
        <Layout>
            <div className="container mx-auto">
                <header>
                    <h1 className="text-5xl font-extrabold text-center mt-8 mb-12 text-blue-900">
                        Welcome to Keira Hopkins' Ecommerce Website. This is a work in progress. Please do not purchase anything. Thank you.
                    </h1>
                </header>
                <main>
                    <section className="mb-8">
                        <h2 className="text-3xl text-center text-blue-800 font-bold mb-4">Blogs</h2>
                        <div className="flex justify-center">
                            {/* Add your blog content here */}
                            <div className={"card bg-white rounded-lg p-8 shadow-md transform text-center transition duration-300 hover:scale-105 flex flex-col justify-between h-full"}>
                                <h3 className="text-2xl font-bold text-center mb-4">Blog 1</h3>
                                <p className="text-lg mb-4">This is a blog post.</p>
                                <button className="bg-blue-600 hover:bg-blue-700 text-center text-white py-3 px-6 rounded self-center"> Read More </button>
                            </div>
                        </div>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-3xl text-center text-blue-800 font-bold mb-4">Products</h2>
                        <div className="grid grid-cols-4 gap-8">
                            <div
                                className="bg-white rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-110 product-card"
                            >
                                <h3 className="text-2xl font-bold mb-4">Product 1</h3>
                                <p className="text-lg mb-4">$19.99</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                            <div
                                className="bg-white rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-110 product-card"
                            >
                                <h3 className="text-2xl font-bold mb-4">Product 2</h3>
                                <p className="text-lg mb-4">$24.99</p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" /*onClick={`https://ecommerce.keirahopkins.co.uk/products/${product_id || 1}`}*/>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
};

export default Home;
