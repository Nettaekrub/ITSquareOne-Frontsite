"use client";

import { useState } from "react";
import { Kanit } from "next/font/google";
import "./globals.css";


const kanit = Kanit({
  weight: "500",
  subsets: ["thai","latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${kanit.className} alo guys`}
      >
        <nav className="bg-white border-gray-200 p-5"> {/* dark:bg-gray-900 ไว้ทำ darkmode */}
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-600 focus:outline-none"
                >
                  {isOpen ? "✖" : "☰"}
              </button>
              <div className="hidden md:block">
                <ul className="justify-center flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white xl:gap-32 md:gap-8">  {/*  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
                  <li>
                    <a href="#" className="block py-2 px-3 text-lg text-gray-900  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About us</a> {/*  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent */}
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-lg text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Donations</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3  text-2xl font-bold bg-blue-700 md:bg-transparent md:p-0 md:text-blue-500" aria-current="page">ITSquareOne</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-lg text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Feedbacks</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-lg text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Sign in</a>
                  </li>
                </ul>
              </div>

              <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-3`}> {/* hamburger temp gonna fix with design later */}
                <ul className="flex flex-col items-center space-y-3">
                  <li>
                    <a href="#" className="text-lg text-gray-900 hover:text-blue-700">About us</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg text-gray-900 hover:text-blue-700">Donations</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3  text-2xl font-bold md:bg-transparent  hover:text-blue-700  text-blue-500" aria-current="page">ITSquareOne</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg text-gray-900 hover:text-blue-700">Feedbacks</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg text-gray-900 hover:text-blue-700">Sign in</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
