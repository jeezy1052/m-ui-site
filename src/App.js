import React from 'react'
import { Typography } from '@mui/material'
import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar'


const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Typography variant='h1'>
        This is a heading
      </Typography>
    </>
  )
}

export default App
