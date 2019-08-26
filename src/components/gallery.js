import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Carousel from 'nuka-carousel'
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
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Carousel autoplay={true}>
      {data.allContentfulGallery.edges.map((edge) => {
        {
          return edge.node.images.map((image, index) => {
            return <Img fluid={image.fluid} key={index} />
          }
        )}
      })}
    </Carousel>
  )
}

export default Gallery
