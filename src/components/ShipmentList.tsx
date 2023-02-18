import React from 'react';
import { ShipmentContext } from '@/contex/ShipmentContext';
import { ShipmentItem } from './ShipmentItem';
import { dataShipment } from '@/data/dataShipment';

import Grid from '@mui/material/Grid';



export const ShipmentList = () => {

  const { state, persistDataState } = React.useContext(ShipmentContext)

  React.useEffect(() => {
    persistDataState(dataShipment)
  }, [])


  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
      }}
    >

      {
        state.map(item => <ShipmentItem key={item.id} interval={item} />)
      }

    </Grid>
  )
}
