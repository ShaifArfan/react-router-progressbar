import { Link } from 'gatsby'
import React from 'react'

function Home() {
  return (
    <>
    <h1>home page</h1>
    <Link to='/about'>about</Link>
    </>
  )
}

export default Home