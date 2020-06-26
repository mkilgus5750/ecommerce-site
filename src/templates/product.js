import React from "react"
import Layout from "../components/Layout/Layout"
import './product.css'
import productPlaceholder from '../images/car_something.jpeg'
import { Outline } from "../components/Icons/Icons"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <Layout>
      <div className="product_container">
        <div className="product p-6">
          <h1 className="pb-6 text-blue-400 text-bold text-xl" >{product.title}</h1>
          <div className="product-image-container">
            <img className="h-auto w-64" src={productPlaceholder} />
          </div>
          <div className="price-quantity">
            <div className="product_price">
              <p className="text-black font-bold">Price:</p>
              <p className="text-xl text-red-500 font-bold">
                ${product.priceRange.minVariantPrice.amount}
              </p>
            </div>
          </div>
          <button className="hover:bg-blue-500 text-white p-2 mt-4 mb-4 rounded bg-green-500">ADD TO CART</button>
          <p className="text-black font-bold">Description:</p>
          <div className="text-gray-500">{product.description}</div>
        </div>
      </div>
    </Layout>
  )
}
export default ProductTemplate