import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import MiyazawaLogo from "../images/miyazawa_logo.png"
import MuramatsuLogo from "../images/murumatsu_logo.jpeg"
import SankyoLogo from "../images/sankyo_logo.jpg"
import "./brands.css"

export default function brands() {
  return (
    <Layout>
      <div className="w-auto m-0 brands">
        <div className="grid justify-center brands_container">
          <div className="brands_header">
            <h1 className="grid justify-center mb-4 text-2xl">All Brands</h1>
          </div>
          <div className="w-64 h-64 mt-4 mb-4 border border-gray-300">
            <Link to="/miyazawa">
              <img src={MiyazawaLogo} />
            </Link>
          </div>
          <div className="w-64 h-64 mt-4 mb-4 border border-gray-300">
            <Link to="/murumatsu">
              <img src={MuramatsuLogo} />
            </Link>
          </div>
          <div className="w-64 h-64 mt-4 mb-4 border border-gray-300">
            <Link to="/sankyo">
              <img src={SankyoLogo} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
