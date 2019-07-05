import React from 'react'
import ActorOverlap from './components/overlap'
import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <ActorOverlap />
      </main>
    </>
  )
}

export default App
