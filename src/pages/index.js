import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout.js"
import "./index.css"
// import { Solid } from "../components/Icons/Icons"
import goldFlute from "../images/gold_headjoint.jpg"
import sankyoFlute from "../images/sankyo_flute(4).jpg"
import sankyoFlutes from "../images/sankyo_flutes.jpg"
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
          <div className="text-4xl font-normal text-center text-white index__container sm:text-5xl">
            <h1 className="index__title">{frontmatter.title}</h1>
            <div
              className="m-4 text-2xl"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <button className="m-4 border border-white rounded hover:bg-white hover:text-black hover:border-black">
              {frontmatter.action_button}
            </button>
          </div>
        </div>
        <div className="relative text-center on_scroll lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="on_scroll_brands">
            <div className="flex justify-center">
              <img className="object-cover p-2" src={sankyoFlute} />
            </div>
            <Link to="/brands">
              <button className="p-2 m-2 border border-black hover:bg-black hover:text-white">
                Search by Brand
              </button>
            </Link>
          </div>
          <div className="on_scroll_products ">
            <div className="flex justify-center">
              <img className="object-cover p-2" src={goldFlute} />
            </div>
            <Link to="/productList">
              <button className="p-2 m-2 border border-black hover:bg-black hover:text-white">
                Search by Product
              </button>
            </Link>
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
