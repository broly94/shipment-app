import { ShipmentData } from '@/interfaces/types'
import { setTimeInterval } from '@/helpers/setTimeInterval';

import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'

interface ShipmentItemProps {
  interval: ShipmentData
}

export const ShipmentItem = ({ interval }: ShipmentItemProps) => {

  const { id, time, motocycle, enable } = interval

  const date: string = setTimeInterval({time})


  return (
    <Grid
      container
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        border: '1px solid black',
        margin: '10px',
        backgroundColor: 'blue'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h6" color="initial">{date}</Typography>
        <Typography variant="h6" color="initial">Motocicletas disponibles: {motocycle}</Typography>
      </Box>
    </Grid>
  )
}
