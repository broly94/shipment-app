import React from 'react';
import { ShipmentContext } from '@/contex/ShipmentContext';
import { ShipmentItem } from './ShipmentItem';

import { Box } from '@mui/system';

export const ShipmentList = () => {

  const { state, setState } = React.useContext(ShipmentContext)

  const { shipmentState } = state

  const setToggleDataEnable = (id: number, motocycle: number) => {

    setState({
      shipmentState: state.shipmentState.map(({ ...shipment }) => {
        if (shipment.id === id) {
          shipment.enable = !shipment.enable
          !shipment.enable ? shipment.motocycle = motocycle - 1 : shipment.motocycle = motocycle + 1
        }
        return shipment
      }),
      users: {
        ...state.users
      },
      locations: {...state.locations}
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: {
          xs: '80%',
          md: '70%',
          lg: '60%',
          xl: '50%'
        }
      }}
    >
      {
        shipmentState.map(item => <ShipmentItem key={item.id} state={item} setToggleDataEnable={setToggleDataEnable} />)
      }
      
    </Box>
  )
}
