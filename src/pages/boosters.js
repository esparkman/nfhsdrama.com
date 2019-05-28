import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allContentfulBooster.edges.map(edge => {
        return (
          <section key={edge.node.id}>
            <Link to={`/boosters/${edge.node.slug}`}>
              <h2 className="font-semibold mb-1 underline">{edge.node.name}</h2>
            </Link>
            <p>{edge.node.position}</p>
          </section>
        )
      })}
    </Layout>
  )
}

export default Boosters
