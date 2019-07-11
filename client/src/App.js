import React from 'react'
import ActorOverlap from './components/overlap'
import Sidebar from './components/sidebar'
import GithubCorner from './components/github-corner'
import WarmStart from './components/warm-start'

function App() {
  return (
    <>
      <WarmStart />
      <GithubCorner />
      <Sidebar />
      <main className="container xl:max-w-full mx-auto py-8 lg:pl-80">
        <ActorOverlap />
      </main>
    </>
  )
}

export default App
