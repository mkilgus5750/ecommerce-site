import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/Layout/Layout"
import productPlaceholder from '../images/car_something.jpeg'
import './products.css'

const ProductsPage = ({ data }) => (
  <Layout>
    <div className="p-6">
      <h1 className="text-2xl mb-4">All Products</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div key={node.id} className="products_preview_container">
            <li key={node.shopifyId}>
              <div className="product_preview border-b-2 border-gray-300 mt-4 mb-4">
                  <div className="max-w-full max-h-full">
                  {node.images[0].localFile && (
                    <Img className="object-contain w-full h-full" fluid={node.images[0].localFile.childImageSharp.fluid} />
                  )}
                  </div>
                  <div className="product_preview_description col-span-2 text-sm">
                    <h3>
                      <Link className="p-2" to={`/product/${node.handle}`}>{node.title}</Link>
                    </h3>
                    <p className="p-2">{node.description}</p>
                    <p className="p-2 text-lg text-xl text-red-500 font-bold">${node.priceRange.minVariantPrice.amount}</p>
                    <p className="p-2">Category: {node.productType}</p>
                  </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </Layout>
)
export default ProductsPage
export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          id
          title
          shopifyId
          description
          handle
          productType
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`