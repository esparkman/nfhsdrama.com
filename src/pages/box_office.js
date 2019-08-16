import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

const BoxOffice = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulShow {
        edges {
          node {
            id
            title
            ticketUrl
            description {
              description
            }
            boxOfficeArt {
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
      <h1 className="text-3xl">Box Office</h1>
      {data.allContentfulShow.edges.map(edge => {
        return (
          <div
            className="md:flex bg-white border rounded-lg p-6 my-2"
            key={edge.node.id}
          >
            <Img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" fluid={edge.node.boxOfficeArt.fluid} alt="User avatar" />
            <div className="text-center md:text-left">
              <Link to={`/box_office/${edge.node.slug}`}>
                <h2 className="text-lg">{edge.node.title}</h2>
              </Link>
              <div className="text-purple-500">
                {edge.node.description.description}
              </div>
              <div className="pt-1 uppercase font-semibold text-purple-500">
                <a href={edge.node.ticketUrl} target="_blank" rel="noopener norefferer">
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default BoxOffice
