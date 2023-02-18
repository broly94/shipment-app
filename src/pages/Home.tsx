import { Box, Grid, Typography } from '@mui/material'
import { ShipmentList } from '@/components/ShipmentList'

export const Home = () => {
  return (
    <Box 
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
    }}
    >
      <Typography variant="h2" color="initial" sx={{marginBottom: '20px'}}>Reserve su moto para el envio</Typography>
      <ShipmentList />
    </Box>
  )
}
