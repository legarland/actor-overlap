import React, { useState } from 'react'
import styled from 'styled-components'
import ItemSearch from './item-search'
import OverlapResults from './overlap-results'

const ActorOverlap = () => {
  const [first, setFirst] = useState({})
  const [second, setSecond] = useState({})

  return (
    <div>
      <div>
        <ItemSearch key="first" onSelect={item => setFirst(item)} />
      </div>
      <div>
        <ItemSearch key="second" onSelect={item => setSecond(item)} />
      </div>
      <OverlapResults first={first} second={second} />
    </div>
  )
}

export default ActorOverlap
