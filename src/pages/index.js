import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulShow(
        sort: { fields: showTime }
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
      <div className="flex flex-wrap justify-between mx-auto">
        {data.allContentfulShow.edges.map(edge => {
          return (
            <div className="my-4 mx-4"
              key={edge.node.id}
            >
              {edge.node.boxOfficeArt ? (
                <div>
                  <Link to="/box_office">
                    <Img
                      className="absolute object-cover rounded-l mr-4"
                      fixed={edge.node.boxOfficeArt.fixed}
                      alt="Box Office Art"
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
