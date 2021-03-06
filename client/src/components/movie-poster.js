import React from 'react'
import noPoster from '../images/no-poster.jpg'

const MoviePoster = ({ url }) => (
  <img
    className="w-full max-w-full mx-auto block sm:max-w-3/4 rounded-lg"
    src={url || noPoster}
    alt="movie poster"
  />
)

export default MoviePoster
