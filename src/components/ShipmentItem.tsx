import React from 'react';
import { ShipmentData } from '@/interfaces/types'
import { setTimeInterval } from '@/helpers/setTimeInterval';

import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { verifyEnableInterval } from '@/helpers/verifyEnableInterval';

interface ShipmentItemProps {
  interval: ShipmentData
}


export const ShipmentItem = ({ interval }: ShipmentItemProps) => {

  const { time, motocycle, enable } = interval

  const date: string = setTimeInterval({ time })

  const enableInterval = verifyEnableInterval({ enable })

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("funciona")
  }

  return (
    <Box
      sx={{
        width: '450px',
        maxHeight: '450px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        borderRadius: '1rem',
        margin: '5px',
        transition: '0.1s ease-in-out',
        border: '2px solid black',
        '&:hover': {
          transform: 'translate(0px, -5px)',
          boxShadow: '0px 0px 19px 11px rgba(0,0,0,0.2)',
          border: enableInterval,
          cursor: 'pointer'
        }
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',

        }}
      >
        <Typography variant="h6" color="initial">Hora: {date}</Typography>
        <Typography variant="h6" color="initial">Motocicletas disponibles: {motocycle}</Typography>
      </Box>
    </Box>
  )
}
