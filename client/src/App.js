import React from 'react'
import ActorOverlap from './components/overlap'
import Header from './components/header'
import Sidebar from './components/sidebar'
import GithubCorner from './components/github-corner'

function App() {
  return (
    <>
      <GithubCorner />
      <Sidebar />
      <main className="container xl:max-w-full mx-auto py-8 lg:pl-80">
        <ActorOverlap />
      </main>
    </>
  )
}

export default App
