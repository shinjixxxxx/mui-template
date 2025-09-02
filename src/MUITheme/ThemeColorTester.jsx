import React from 'react'
import { WAKU } from '../MUITheme/MUITheme'
import { Box } from '@mui/material'

const ThemeColorTester = () => {
  return (
    <>
    <Box sx={(theme) => ( {...WAKU(theme),display:"flex",flexDirection:"column"})}>
    <Box sx={{ flex: 1, fontSize: "small", bgcolor: 'primary.main', color: 'primary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ flex: 1, fontSize: "small", bgcolor: 'primary.light', color: 'primary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ flex: 1, fontSize: "small", bgcolor: 'primary.dark', color: 'primary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ flex: 1, fontSize: "small", bgcolor: 'secondary.main', color: 'secondary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ flex: 1, fontSize: "small", bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ flex: 1, fontSize: "small", bgcolor: 'secondary.dark', color: 'secondary.contrastText' }}>ThemeColorTester</Box>
    </Box>
    </>
  )
}

export default ThemeColorTester
