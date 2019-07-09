import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config'

const CharacterImage = ({ link }) => {
  const [imgData, setImgData] = useState({
    src:
      'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_._V1_SY100_CR38,0,100,100_AL_.png'
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (link) {
      setLoading(true)
      const getImageUrl = async () => {
        const result = await axios.get(
          `${apiUrl}/getCharacterPhoto?link=${link}`
        )
        setImgData(result.data)
        setLoading(false)
      }
      getImageUrl()
    }
  }, [link])

  return (
    <div className="text-center">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <img
          className="inline-block rounded-full"
          src={imgData.src}
          {...(imgData.srcset && { srcSet: imgData.srcset })}
          alt=""
          style={{ minWidth: 140 }}
        />
      )}
    </div>
  )
}

export default CharacterImage
