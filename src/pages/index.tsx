// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import {useSession} from 'next-auth/react';

const Home = () => {
    const {data: session} = useSession();
    return (
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-5xl font-extrabold text-center mt-8 mb-12 text-blue-900">
                    Welcome to my E-commerce Website!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Product 1</h2>
                        <p className="text-lg mb-4">$19.99</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Product 2</h2>
                        <p className="text-lg mb-4">$24.99</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
