import React from 'react'

import Hero from './Hero'
import Featured from './Featured'
import RecentPptyList from './RecentPptyList'
import Awards from './Awards'
import Pricing from './Pricing'
const Body = () => {
  return (
    <>
      <Hero/>
      <Featured/>
      <RecentPptyList/>
      <Awards/>
      <Pricing/>
    </>
  )
}

export default Body