import { useSession, signIn, signOut } from 'next-auth/react';
import React from "react";

export default function LoginBtn() {
    const { data: session  } = useSession();
    if (session) {
        // @ts-ignore
        return (
            <button className={"flex items-center space-x-2 bg-white text-gray-800 py-2 px-4 rounded"} onClick={( () => signOut())}> Log out
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </button>
        )
    }
    return (
        <button className={"flex items-center space-x-2 bg-white text-gray-800 py-2 px-4 rounded"} onClick={( () => signIn())}> Log In
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </button>
    )
}