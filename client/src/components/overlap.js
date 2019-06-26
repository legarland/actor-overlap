import React, { useState } from 'react'
import styled from 'styled-components'
import ItemSearch from './item-search'
import OverlapResults from './overlap-results'

const ActorOverlap = () => {
  const [firstId, setFirstId] = useState()
  const [secondId, setSecondId] = useState()

  return (
    <div>
      <div>
        <ItemSearch key="first" onSelect={id => setFirstId(id)} />
        <br />
        {firstId}
      </div>
      <div>
        <ItemSearch key="second" onSelect={id => setSecondId(id)} />
        <br />
        {secondId}
      </div>
      <OverlapResults firstId={firstId} secondId={secondId} />
    </div>
  )
}

export default ActorOverlap
