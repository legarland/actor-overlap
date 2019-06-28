import React from 'react'
import styled from 'styled-components'
import ActorOverlap from './components/overlap'

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <ActorOverlap />
    </Container>
  )
}

export default App
