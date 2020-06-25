import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.js"
import './index.css'
// import { Solid } from "../components/Icons/Icons"
import CarInterior from "../images/car_interior.jpeg";
import Engine from '../images/car_engine.jpeg';

export default function Index({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      {/* <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700">
        <Solid.Bell className="w-6 h-6 text-white" />
      </div> */}
     
        <div>
          <div className="index__splash">
            <div className="index__container sm:text-5xl text-4xl text-center text-white font-normal text-white">
              <h1 className="index__title">{frontmatter.title}</h1>
              <div className="text-2xl m-4" dangerouslySetInnerHTML={{ __html: html }} />
              <button className="border border-white rounded m-4 ">
                {frontmatter.action_button}
              </button>
            </div>

          </div>
            <div className="on_scroll relative text-center lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="on_scroll_brands">
                <div className="flex justify-center">
                  <img className="object-cover" src={Engine} />
                </div>
                <button className="border border-black p-2 m-2">Search by Brand</button>
              </div>
              <div className="on_scroll_products ">
                <div className="flex justify-center">
                  <img className="object-cover" src={CarInterior} />
                </div>
                <button className="border border-black p-2 m-2">Search by Product</button>
              </div>
            </div>
        </div>
  
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        title
        action_button
      }
    }
  }
`
