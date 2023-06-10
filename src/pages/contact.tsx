// Imports
import React from "react";
import Layout from "../components/Layout";

// Component
export default function Contact() {
    return (
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-5xl font-extrabold text-center mt-8 mb-12 text-blue-900">
                    Contact
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        className="bg-white rounded-lg p-8 shadow-md transform text-center transition duration-300 hover:scale-105 flex flex-col justify-between h-full">
                        <h2 className="text-3xl font-bold mb-4">Email</h2>
                        <p className="text-xl mb-4 truncate">
                            purchase@ecommerce.keirahopkins.co.uk
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-center text-white py-3 px-6 rounded self-center">
                            <a href="mailto:purchase@ecommerce.keirahopkins.co.uk" className="text-lg">
                                Send Email
                            </a>
                        </button>
                    </div>
                    <div
                        className="bg-white rounded-lg p-8 shadow-md transform transition text-center duration-300 hover:scale-105 flex flex-col justify-between h-full">
                        <h2 className="text-3xl font-bold mb-4">Phone Number</h2>
                        <p className="text-xl mb-4 truncate">+44 1234 567890</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded self-center">
                            <a href="tel:+441234567890" className="text-lg">
                                Call Us
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
