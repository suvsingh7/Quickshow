import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import TrailersSection from '../components/TrailersSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturedSection/>
      <TrailersSection/>
    </>
  )
}

export default Home
// This component serves as the home page of the application.
// It includes a hero section that displays a featured movie with its details and a featured section that showcases currently showing movies.
// The HeroSection component displays the movie title, genre, release year, duration  