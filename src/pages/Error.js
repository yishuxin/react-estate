import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'


const Error = () => {
  return (
    <Hero>
      <Banner title="Error" subtitle="404 not found">
      <Link to='/' className="btn-primary" >return home</Link>
      </Banner>
    </Hero>
  )
}

export default Error
