import React from 'react'
import styled from 'styled-components'
import ActorOverlap from './components/overlap'

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`

function App() {
  return (
    <Container>
      <h1>Actor Overlap</h1>
      <ActorOverlap />
    </Container>
  )
}

export default App
