import { Box, Typography } from '@mui/material'
import { ShipmentList } from '@/components/Home/ShipmentList'
import { ShipmentQuantity } from '@/components/Home/ShipmentQuantity'

export const Home = () => {
  return (
    <Box
      className="home"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: '100vw',
        padding: '0px',
        margin: '0px',
      }}
    >
      <Typography 
        variant="h1"
        sx={{
          textAlign: 'center',
          fontWeight: 'light',
          margin: '30px 10px'
        }}
        >
        fast shipping
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          color: 'gray',
          fontFamily: 'Helvetica',
          textTransform: 'uppercase',
        }}
      >Reserva tu moto ahora es mas facil
      </Typography>

      <ShipmentQuantity />
      <ShipmentList />
    </Box>
  )
}
