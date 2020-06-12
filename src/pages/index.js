import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import SEO from '../components/seo'
import FormBenefits from '../components/formBenefits'
import Layout from '../components/layout'
import Gallery from '../components/gallery'

import benefit1 from '../images/bonus1.png'
import benefit2 from '../images/bonus2.png'
import benefit3 from '../images/bonus3.png'
import benefit4 from '../images/bonus4.png'
import benefit5 from '../images/bonus5.png'
import benefit6 from '../images/bonus6.png'

const MIN_WIDTH = '768px'
const MIN_WIDTH_MD = '1024px'

const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.65em;
  text-align: center;
  color: #646464;
  line-height: 1.25em;

  @media (min-width: ${MIN_WIDTH_MD}) {
    font-size: 2rem;
  }
`

const P = styled.p`
  font-size: 1.25rem;
  opacity: 0.75;
  margin-top: 0;
  text-align: center;
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${MIN_WIDTH_MD}) {
    font-size: 1.5rem;
  }
`

const Benefits = styled.div`
  box-sizing: border-box;
  user-select: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto;

  @media (min-width: ${MIN_WIDTH}) {
    grid-template-columns: auto auto;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    padding: 0 50px;
    grid-template-columns: auto auto auto;
  }
`

const Benefit = styled.img`
  width: 100%;
`

const PriceTag = styled.p`
  color: #3a5544;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  margin: 0;

  span {
    font-size: 1.5rem;
  }

  @media (min-width: ${MIN_WIDTH}) {
    font-size: 4rem;
    span {
      font-size: 2rem;
    }
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    font-size: 6rem;
    span {
      font-size: 2.5rem;
    }
  }
`

const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #dbc4ab;
  margin: 0 auto;
`

const FloatButton = styled.a`
  height: 40px;
  width: 100%;
  background-color: #3a5544;
  border-color: #3a5544;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (min-width: ${MIN_WIDTH_MD}) {
    display: none;
  }
`

const SectionPresentation = styled.section``

function IndexPage() {
  const intl = useIntl().formatMessage
  const [clicked, setClicked] = useState(false)

  return (
    <Layout>
      <SEO title={intl({ id: 'title' })} description={intl({ id: 'description' })} />
      <H1 style={{ color: '#3a5544' }}>
        AHORA PUEDES FORMAR PARTE DE NUESTRA FAMILIA ANA Y JOSÉ COLLECTION
      </H1>
      <SectionPresentation>
        <P>
          Amor y trabajo duro han sido los pilares de Ana y José Collection por más de 38 años, lo
          que ha logrado posicionarnos como pioneros de la hospitalidad en Tulum. Hemos crecido de
          la mano de esta maravillosa ciudad y su gente, logrando conformar una gran familia con
          huéspedes que nos visitan de todas partes del mundo.
        </P>
        <P>
          Preocupados cada vez más en crear experiencias auténticas e inolvidables a cada miembro de
          nuestra familia, hemos creado el programa "Ana y José Family Member" con el cuál obtendrás
          beneficios exclusivos que harán de tus vacaciones un momento mágico que podrás compartir
          con tus seres queridos.
        </P>
        <P>
          A continuación te compartimos las increíbles experiencias a las que tendrás acceso al
          formar parte de nuestra familia:
        </P>
        <Benefits>
          <Benefit src={benefit1} />
          <Benefit src={benefit2} />
          <Benefit src={benefit3} />
          <Benefit src={benefit4} />
          <Benefit src={benefit5} />
          <Benefit src={benefit6} />
        </Benefits>
        <PriceTag>
          <span>COSTO DE LA MEMBRESÍA</span>
          <br />
          $1900 MXN
        </PriceTag>
      </SectionPresentation>
      <Gallery />
      <H1 id="form">{intl({ id: 'h1' })}</H1>
      <SectionForm>
        <FormBenefits hideOnSuccess />
      </SectionForm>
      <FloatButton disabled={clicked} onClick={() => setClicked(true)} href="#form">
        Solicitar membresía
      </FloatButton>
    </Layout>
  )
}

export default IndexPage
