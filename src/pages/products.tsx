// Imports

import React from "react";
import Layout from "../components/Layout";
// Component
export default function Products() {
    return (
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-5xl font-extrabold text-center mt-8 mb-12 text-blue-900">
                    Products
                </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
                    <h2 className="text-3xl font-bold mb-4">Product 1</h2>
                    <h3 className="text-2xl mb-4 "> Product 1 is a product that is testing.</h3>
                    <p className="text-xl mb-4 truncate">$19.99</p>
                    <button className="bg-blue-600 hover:bg-blue-700  text-white py-3 px-6 rounded">
                        Add to Cart
                    </button>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
                    <h2 className="text-3xl font-bold mb-4">Product 2</h2>
                    <h3 className="text-2xl mb-4 "> Product 2 is a product that is testing.</h3>
                    <p className="text-xl mb-4 truncate">$24.99</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded ">
                        Add to Cart
                    </button>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
                    <h2 className="text-3xl font-bold mb-4">Product 3</h2>
                    <h3 className="text-2xl mb-4 "> Product 3 is a product that is testing.</h3>
                    <p className="text-xl mb-4 truncate">$69.99</p>
                    <button className="bg-blue-600 hover:bg-blue-700  text-white py-3 px-6 rounded">
                        Add to Cart
                    </button>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
                    <h2 className="text-3xl font-bold mb-4">Product 4</h2>
                    <h3 className="text-2xl mb-4 "> Product 4 is a product that is testing.</h3>
                    <p className="text-xl mb-4 truncate">$12.99</p>
                    <button className="bg-blue-600 hover:bg-blue-700  text-white py-3 px-6 rounded">
                        Add to Cart
                    </button>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md transform transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
                    <h2 className="text-3xl font-bold mb-4">Product 5</h2>
                    <h3 className="text-2xl mb-4 "> Product 5 is a product that is testing.</h3>
                    <p className="text-xl mb-4 truncate">$9.99</p>
                    <button className="bg-blue-600 hover:bg-blue-700  text-white py-3 px-6 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </Layout>
    );
}