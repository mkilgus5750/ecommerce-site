import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import "./products.css"

const Murumatsu = ({ data }) => (
  <Layout>
    <div className="p-6">
      <h1 className="mb-4 text-2xl">Murumatsu Flutes</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div key={node.id} className="products_preview_container">
            <li key={node.shopifyId}>
              <div className="mt-4 mb-4 border-b-2 border-gray-300 product_preview">
                {/* <div className="max-w-full max-h-full">
                  {node.images[0].localFile && (
                    <Img className="object-contain w-full h-full" fluid={node.images[0].localFile.childImageSharp.fluid} />
                  )}
                  </div> */}
                <div className="col-span-2 text-sm product_preview_description">
                  <h3>
                    <Link to={`/product/${node.handle}`}>{node.title}</Link>
                  </h3>
                  <p className="pb-2">{node.description}</p>
                  <p className="pb-2 text-lg text-xl font-bold text-red-500">
                    ${node.priceRange.minVariantPrice.amount}
                  </p>
                  <p className="pb-2">Category: {node.productType}</p>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </Layout>
)
export default Murumatsu
export const query = graphql`
  {
    allShopifyProduct(filter: { vendor: { eq: "Murumatsu" } }) {
      edges {
        node {
          title
          productType
          vendor
          id
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
