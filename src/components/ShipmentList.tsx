import React from 'react';
import { ShipmentContext } from '@/contex/ShipmentContext';
import { ShipmentItem } from './ShipmentItem';
import { dataShipment } from '@/data/dataShipment';

import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';


export const ShipmentList = () => {

  const { state, persistDataState } = React.useContext(ShipmentContext)

  React.useEffect(() => {
    persistDataState(dataShipment)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '60%',
      }}
    >
      {
        state.map(item => <ShipmentItem key={item.id} interval={item} />)
      }
    </Box>
  )
}
