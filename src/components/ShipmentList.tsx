import React from 'react';
import { ShipmentContext } from '@/contex/ShipmentContext';
import { ShipmentItem } from './ShipmentItem';


import { Box } from '@mui/system';


export const ShipmentList = () => {

  const { state, setToggleDataEnable } = React.useContext(ShipmentContext)

  const { shipmentState } = state

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '60%',
        width: '80%'
      }}
    >
      {
        shipmentState.map(item => <ShipmentItem key={item.id} interval={item} setToggleDataEnable={setToggleDataEnable} />)
      }
    </Box>
  )
}
