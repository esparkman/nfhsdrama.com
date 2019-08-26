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
  const ppTag = '<pp:tickets width="600" event-all="44443" data-etheme="000099"></pp:tickets>'
  return (
    <Layout>
      <h1 className="text-3xl">Box Office</h1>
      {data.allContentfulShow.edges.map(edge => {
        return (
          <div
            className="md:flex bg-white border rounded-lg p-6 my-2"
            key={edge.node.id}
          >
            { edge.node.boxOfficeArt ?
              <Img 
                className="w-64 h-32 mx-auto md:mx-0 md:mr-6"
                fluid={edge.node.boxOfficeArt.fluid}
                alt="User avatar"
              /> :
              ''
            }
            <div className="text-center md:text-left">
              <Link to={`/box_office/${edge.node.slug}`}>
                <h2 className="text-lg">{edge.node.title}</h2>
              </Link>
              <div className="text-purple-500">
                {edge.node.description ? edge.node.description.description : '' }
              </div>
              <div className="pt-1 uppercase font-semibold text-purple-500">
                <a href={edge.node.ticketUrl} target="_blank" rel="noopener noreferrer">
                  Buy Tickets
                </a>
                
                <div dangerouslySetInnerHTML={{ __html: ppTag }} />
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default BoxOffice
