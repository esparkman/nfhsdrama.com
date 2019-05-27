import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Class = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulClass {
        edges {
          node {
            id
            title
            description {
              json
            }
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="text-3xl">Class Information</h1>
      <article>
        {data.allContentfulClass.edges.map(edge => {
          return (
            <section key={edge.node.id}>
              <h2 className="font-semibold mb-1 underline">
                {edge.node.title}
              </h2>
              <p>Last updated: {edge.node.publishedDate}</p>
              <div className="my-4 list-disc">
                {documentToReactComponents(edge.node.description.json)}
              </div>
            </section>
          )
        })}
      </article>
    </Layout>
  )
}

export default Class
