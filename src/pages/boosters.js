import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Boosters = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooster(sort: { fields: name, order: DESC }) {
        edges {
          node {
            id
            name
            position
            email
            slug
            profilePicture {
              fluid(maxWidth: 100, maxHeight: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="mx-4">
        {data.allContentfulBooster.edges.map(edge => {
          return (
            <div className="md:flex bg-white border rounded-lg p-6 my-2" key={edge.node.id}>
              <Img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" fluid={edge.node.profilePicture.fluid} alt="User avatar" />
              <div className="text-center md:text-left">
                <Link to={`/boosters/${edge.node.slug}`}>
                  <h2 className="text-lg">{edge.node.name}</h2>
                </Link>
                <div className="text-purple-500">{edge.node.position}</div>
                <div className="text-gray-600">{edge.node.email}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Boosters
