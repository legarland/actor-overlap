import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config'

const CharacterImage = ({ link }) => {
  const [imgData, setImgData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getImageUrl = async () => {
      const result = await axios.get(`${apiUrl}/getCharacterPhoto?link=${link}`)
      setImgData(result.data)
      setLoading(false)
    }
    getImageUrl()
  }, [link])

  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <img
          src={imgData.src}
          srcSet={imgData.srcset}
          alt=""
          style={{ minWidth: 140 }}
        />
      )}
    </div>
  )
}

export default CharacterImage
