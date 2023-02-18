import { Grid } from '@mui/material'
import { ShipmentList } from '@/components/ShipmentList'

export const Home = () => {
  return (
    <Grid 
    container
    sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      padding: '20px',
    }}
    >
      <ShipmentList />
    </Grid>
  )
}
