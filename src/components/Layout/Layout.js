import React from "react"
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Layout.css';

export default function Layout({children}){
  return(
    <div className="Layout">
        <Header />
        <div className="Layout-content">
          {children}
        </div>
        <Footer />
    </div>
  )
}
