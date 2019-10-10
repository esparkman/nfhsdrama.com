import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

const BoxOffice = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulShow (
        sort: { fields: showTime },
        filter: { status: { eq: true } } 
      ) {
        edges {
          node {
            id
            title
            description {
              description
            }
            boxOfficeArt {
              fixed(width: 300) {
                ...GatsbyContentfulFixed
              }
            }
            showTime {
              eventTime(formatString: "MMMM Do, YYYY hh:mm A")
              ticketUrl
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
            className="md:flex bg-white border rounded-lg my-4"
            key={edge.node.id}
          >
            { edge.node.boxOfficeArt ?
              <div className="relative pb-2/3">
                <Img 
                  className="absolute h-full w-full object-cover rounded-l mr-4"
                  fixed={edge.node.boxOfficeArt.fixed}
                  alt="Box Office Art"
                /> 
              </div> :
              ''
            }
            <div className="text-center md:text-left mx-6 my-4">
              <Link to={`/box_office/${edge.node.slug}`}>
                <h2 className="text-lg pb-2">{edge.node.title}</h2>
              </Link>
              <div className="text-purple-500 text-sm">
                {edge.node.description ? edge.node.description.description : '' }
              </div>
              <div className="mt-4 flex justify-between">
                { edge.node.showTime.map(show => {
                  return (
                  <div className="flex flex-col pt-1 uppercase font-semibold text-purple-500 text-xs" key={show.eventTime}>
                    <span>{show.eventTime}</span>
                    <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg px-2 py-2 bg-nfhspurple text-white text-center mt-2">
                      Buy Tickets
                    </a>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default BoxOffice
