import React, { useState, useEffect } from 'react'

const LoadingMessage = ({ delay }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, delay)
  }, [delay])

  return show ? (
    <div className="text-blue-200 p-4">
      <div className="text-lg mb-1 font-bold">Still searching...</div>
      Titles that contain a large amount of credited actors can cause extended
      search times.
    </div>
  ) : (
    <div></div>
  )
}

export default LoadingMessage
