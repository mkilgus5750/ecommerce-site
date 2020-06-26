import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Body from "../images/body.jpg"
import Headjoint from "../images/download.png"

import "./brands.css"

export default function ProductList() {
  return (
    <Layout>
      <div className="w-auto m-0 brands">
        <div className="grid justify-center brands_container">
          <div className="brands_header">
            <h1 className="grid justify-center mb-4 text-2xl">Products</h1>
          </div>
          <div className="">
            <Link to="/miyazawa">
              <img
                className="w-64 h-64 mt-4 mb-4 border border-gray-300"
                src={Body}
              />
              Body
            </Link>
          </div>
          <div className="">
            <Link to="/murumatsu">
              <img
                className="w-64 h-64 mt-4 mb-4 border border-gray-300"
                src={Headjoint}
              />
              Headjoint
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
