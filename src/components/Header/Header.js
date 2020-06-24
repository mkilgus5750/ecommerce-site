import { Link } from "gatsby"
import React from "react"
import './Header.css';

export default function Header() {
  return (
    <header className="header__container bg-gray-100">
      <div className="header ">
        <span className="header__logo">APConsolidator</span>
        <nav className="nav">
          <ul className="nav__list">
            <li><Link className="nav__item" to='/'>Home</Link></li>
            {/* change list items later to organize by brand and product type*/}
            <li><Link className="nav__item" to='/products'>Products</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
