import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex min-h-20 gap-10 justify-center items-center bg-[var(--theme-purple)]'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
      
    </div>
  )
}
