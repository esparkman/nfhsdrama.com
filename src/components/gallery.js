import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        edges {
          node {
            title
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allContentfulGallery.edges.map((edge) => {
        {edge.node.images.map((image, index) => {
          return <Img alt="Heyo 1" src={image.fluid} key={index} />
        })}
      })}
    </>
  )
}

export default Gallery
