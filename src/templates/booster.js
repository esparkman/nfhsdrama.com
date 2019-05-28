import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBooster(slug: { eq: $slug }) {
      name
      position
      email
    }
  }
`

const Booster = props => {
  return (
    <Layout>
      <h1 className="font-semibold text-xl">
        {props.data.contentfulBooster.position}
      </h1>
      <h3>{props.data.contentfulBooster.name}</h3>
      <p>{props.data.contentfulBooster.email}</p>
    </Layout>
  )
}

export default Booster
