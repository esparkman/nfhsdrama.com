import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBooster(slug: { eq: $slug }) {
      name
      position
      email
      profilePicture {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Booster = props => {
  return (
    <Layout>
      <div className="md:flex bg-white border rounded-lg p-6 my-2">
        <Img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" fluid={props.data.contentfulBooster.profilePicture.fluid} alt="User avatar" />
        <div className="text-center md:text-left">
          
          <h2 className="text-lg">{props.data.contentfulBooster.name}</h2>
          
          <div className="text-purple-500">{props.data.contentfulBooster.position}</div>
          <div className="text-gray-600">{props.data.contentfulBooster.email}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Booster
