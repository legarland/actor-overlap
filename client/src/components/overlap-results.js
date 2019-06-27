import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import OverlapResult from './overlap-result'

const OverlapResults = ({ first, second }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  return (
    <div>
      <button
        disabled={!first || !second}
        type="button"
        onClick={() => {
          setLoading(true)
          axios
            .get(
              `http://localhost:7071/api/getOverlap?ids=${first.id},${second.id}`
            )
            .then(result => {
              setData(result.data.data)
              console.log(result.data.data)
            })
            .catch(err => {
              setData([])
              setLoading(false)
            })
        }}
      >
        Search
      </button>
      {data.map(result => (
        <OverlapResult
          key={result.name}
          first={first}
          second={second}
          {...result}
        />
      ))}
    </div>
  )
}

export default OverlapResults
