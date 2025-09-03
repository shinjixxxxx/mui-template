import React from 'react'
import { WAKU } from '../MUITheme/MUITheme'
import { Box } from '@mui/material'

const ThemeColorTester = () => {
  const _sx = { m:"3px" , p:"3px 8px",borderRadius:"5px", flex: 1, fontSize: "small",  };
  return (
    <>
    <Box sx={(theme) => ( {...WAKU(theme),display:"flex",flexDirection:"column"})}>
      <Box sx={{..._sx , bgcolor: 'primary.main', color: 'primary.contrastText'}}>ThemeColorTester</Box>
      <Box sx={{..._sx , bgcolor: 'primary.light', color: 'primary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ ..._sx , bgcolor: 'primary.dark', color: 'primary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ ..._sx , bgcolor: 'secondary.main', color: 'secondary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ ..._sx , bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>ThemeColorTester</Box>
      <Box sx={{ ..._sx , bgcolor: 'secondary.dark', color: 'secondary.contrastText' }}>ThemeColorTester</Box>
    </Box>
    </>
  )
}

export default ThemeColorTester
