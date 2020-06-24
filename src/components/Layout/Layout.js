import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import "./Layout.css"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
