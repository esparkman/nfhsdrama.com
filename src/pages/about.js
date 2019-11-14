import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const About = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDirector(sort: { fields: [name], order: ASC }) {
        edges {
          node {
            id
            slug
            name
            title
            profilePicture {
              fluid(maxWidth: 200, maxHeight: 250, quality: 80) {
                ...GatsbyContentfulFluid_withWebp
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
        <h1 className="text-3xl">About NFHS Theater</h1>
        <p>Information about the Theatere Troupe</p>
        <p>
          I'll be adding the Drama Teams Profiles here later this evening.
          Outside of that, I need content for this page. History of the Program,
          Accolades, fun facts. Anything.
        </p>

        <div id="drama-team" className="flex flex-wrap">
          {data.allContentfulDirector.edges.map(edge => {
            return (
              <div key={edge.node.id} className="w-auto mx-6 my-6">
                <Img
                  fluid={edge.node.profilePicture.fluid}
                  alt={`${edge.name} - ${edge.title}`}
                />
                <p>{edge.node.name}</p>
                <p>{edge.node.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default About
