import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const OverlapResults = ({ firstId, secondId }) => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <button
        disabled={!firstId && !secondId}
        type="button"
        onClick={() => {
          axios
            .get(
              `http://localhost:7071/api/getOverlap?ids=${firstId},${secondId}`
            )
            .then(result => {
              console.log(result.data)
            })
        }}
      >
        Search
      </button>
    </div>
  )
}

export default OverlapResults
