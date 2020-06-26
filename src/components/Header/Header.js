import { Link } from "gatsby"
import React from "react"
import './Header.css';
import { Outline } from "../Icons/Icons";

export default function Header() {
  return (
    <nav className="nav flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
      {/*  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700">
          <Solid.ShoppingCart className="w-6 h-6 text-white" />
        </div> */}
          <span className="logo font-semibold text-xl tracking-tight p-2">OEM</span>
        </div>
        <div className="block lg:hidden ">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Home
            </a>
            <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Brands
            </a>
            <a href="/products" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
              Products
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white">
              Accessories 
            </a>
          </div>

          <div>
            
            <input type="text" name="search"></input>
            <label htmlFor="search" className="inline-block text-sm px-4 py-2 leading-none text-white border round ml-2 mt-4 lg:mt-0">Search</label>
          </div>
        </div>
</nav>
   /*  <header className="header__container bg-gray-100">
      <div className="header ">
        <span className="header__logo">APConsolidator</span>
        <nav className="nav">
          <ul className="nav__list">
            <li><Link className="nav__item block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to='/'>Home</Link></li>
            <li><Link className="nav__item block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to='/products'>Products</Link></li>
            
          </ul>
        </nav>
      </div>
    </header> */
  )
}


