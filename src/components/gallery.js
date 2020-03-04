import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ModalCarousel from './ModalCarousel'

const MIN_WIDTH = '768px'

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1024px;
  margin: 32px auto;
`

const RowImages = styled.div`
  margin-bottom: 8px;
`

const WrapperImage = styled.div`
  height: 250px;
  display: inline-block;
  width: 33.33%;
  border-left: 5px solid white;
  border-right: 5px solid white;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: ${MIN_WIDTH}) {
    width: ${(props) => (props.featured ? '50%' : '25%')};
  }

  &:hover {
    opacity: 0.85;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
`

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const data = useStaticQuery(graphql`
    fragment fluidAndFixedImage on File {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
        fixed(width: 720) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      imageOne: file(relativePath: { eq: "3gallery.jpg" }) {
        ...fluidAndFixedImage
      }
      imageTwo: file(relativePath: { eq: "2gallery.jpg" }) {
        ...fluidAndFixedImage
      }
      imageThree: file(relativePath: { eq: "1gallery.jpg" }) {
        ...fluidAndFixedImage
      }
      imageFour: file(relativePath: { eq: "4gallery.jpg" }) {
        ...fluidAndFixedImage
      }
      imageFive: file(relativePath: { eq: "6gallery.jpg" }) {
        ...fluidAndFixedImage
      }
      imageSix: file(relativePath: { eq: "5gallery.jpg" }) {
        ...fluidAndFixedImage
      }
      imageSeven: file(relativePath: { eq: "7gallery.jpg" }) {
        ...fluidAndFixedImage
      }
    }
  `)

  const onOpenModal = (selectedImage) => {
    setOpenModal(true)
    setSelectedImage(selectedImage)
  }

  return (
    <Wrapper>
      <RowImages>
        <WrapperImage featured onClick={() => onOpenModal(0)}>
          <Img objectFit="cover" alt="" fluid={data.imageOne.childImageSharp.fluid} />
        </WrapperImage>
        <WrapperImage onClick={() => onOpenModal(1)}>
          <Img objectFit="cover" alt="" fluid={data.imageTwo.childImageSharp.fluid} />
        </WrapperImage>
        <WrapperImage onClick={() => onOpenModal(2)}>
          <Img objectFit="cover" alt="" fluid={data.imageThree.childImageSharp.fluid} />
        </WrapperImage>
      </RowImages>
      <RowImages>
        <WrapperImage onClick={() => onOpenModal(3)}>
          <Img objectFit="cover" alt="" fluid={data.imageSix.childImageSharp.fluid} />
        </WrapperImage>
        <WrapperImage onClick={() => onOpenModal(4)}>
          <Img objectFit="cover" alt="" fluid={data.imageFive.childImageSharp.fluid} />
        </WrapperImage>
        <WrapperImage featured onClick={() => onOpenModal(5)}>
          <Img objectFit="cover" alt="" fluid={data.imageSeven.childImageSharp.fluid} />
        </WrapperImage>
      </RowImages>

      <ModalCarousel
        isOpen={openModal}
        selectedImage={selectedImage}
        gallery={[
          data.imageOne.childImageSharp.fixed,
          data.imageTwo.childImageSharp.fixed,
          data.imageThree.childImageSharp.fixed,
          data.imageSix.childImageSharp.fixed,
          data.imageFive.childImageSharp.fixed,
          data.imageSeven.childImageSharp.fixed,
          data.imageFour.childImageSharp.fixed,
        ]}
        onCloseModal={() => setOpenModal(false)}
      />
    </Wrapper>
  )
}

export default Gallery