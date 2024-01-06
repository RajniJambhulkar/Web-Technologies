import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>

    <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
                <ul className="flex flex-row  font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <div >
                    <li>
                        <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-900 dark:text-white hover:underline">About Us</Link>
                    </li>

                    <li>
                        <Link to="/form" className="text-gray-900 dark:text-white hover:underline">Form</Link>
                    </li>

                    </div>
                 
                   
                    <li>
                        <Link to="/login" className="text-gray-900 dark:text-white hover:underline">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    </div>
  )
}
