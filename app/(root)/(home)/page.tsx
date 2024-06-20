import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { useTheme } from '@/Context/ThemeProvider'

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home