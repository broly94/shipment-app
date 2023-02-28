import React from 'react';
import { ShipmentData } from '@/interfaces/types'
import { setTimeInterval } from '@/helpers/setTimeInterval';
import { verifyEnableIntervalStyle } from '@/helpers/verifyEnableInterval';
//MMUI
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
// Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
//Toast
import { ToastComponent } from '../ToastComponent';


interface Props {
  state: ShipmentData
  setToggleDataEnable: (id: number, motocycle: number) => void
}


export const ShipmentItem = ({ state, setToggleDataEnable }: Props) => {

  const { id, time, motocycle, city, enable } = state

  const date: string = setTimeInterval({ time })

  const toggleEnableIntervalStyle = verifyEnableIntervalStyle({ enable })

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setToggleDataEnable(id, motocycle)
    ToastComponent({
      enable,
      type: 'shipment',
      messageSuccess: 'Envio agendado!',
      messageCanceledOrError: 'Envio cancelado!'
    })
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxHeight: '200px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        margin: '20px',
        transition: enable ? '0.1s ease-in-out' : '',
        border: enable ? "2px solid #34465D" : '2px solid green',
        '&:hover': {
          transform: enable ? 'translate(-5px, -5px)' : '',
          boxShadow: enable ? '8px 8px 0px -3px rgba(0,0,0,0.6);' : '',
          border: toggleEnableIntervalStyle,
          cursor: 'pointer'
        }
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          justifyContent: 'start',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: {
              xs: '10px'
            }
          }}
        >
          <AccessTimeIcon sx={{ paddingRight: '5px' }} />
          <Typography variant="h6" color="initial">
            {date}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: {
              xs: '10px'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: '',
              textTransform: 'uppercase',
            }}
          >
            Localidad
          </Typography>
          <Typography variant="h6" color="initial">
            {city}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: {
              xs: '10px'
            }
          }}
        >
          <ElectricMopedIcon sx={{ paddingRight: '5px' }} fontSize="large" />
          <Typography variant="h6" color="initial">
            {motocycle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
