import React from 'react';
import { ShipmentData } from '@/interfaces/types'
import { setTimeInterval } from '@/helpers/setTimeInterval';

import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { verifyEnableInterval } from '@/helpers/verifyEnableInterval';

interface ShipmentItemProps {
  interval: ShipmentData
  setToggleDataEnable: (id: number, motocycle: number) => void
}


export const ShipmentItem = ({ interval, setToggleDataEnable }: ShipmentItemProps) => {

  const { id, time, motocycle, enable } = interval

  const date: string = setTimeInterval({ time: time!! })

  const enableInterval = verifyEnableInterval({ enable })


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
      setToggleDataEnable(id!!, motocycle!!)
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
        margin: '10px',
        transition: enable ? '0.1s ease-in-out' : '',
        border: enable ? "2px solid white" : '2px solid red',
        '&:hover': {
          transform: enable ? 'translate(0px, -5px)' : '',
          boxShadow: enable ? '0px -4px 29px -16px rgba(255,255,255,0.8),0px 10px 15px -3px rgba(0,0,0,0.1);' : '',
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
        <Typography variant="h6" color="white">Hora: {date}</Typography>
        <Typography variant="h6" color="white">Motocicletas disponibles: {motocycle}</Typography>
      </Box>
    </Box>
  )
}
