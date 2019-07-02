import React from 'react'
import styled from 'styled-components'
import noPoster from '../images/no-poster.jpg'

const Image = styled.img`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  display: block;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`
const MoviePoster = ({ url }) => (
  <Image src={url || noPoster} alt="movie poster" />
)

export default MoviePoster
