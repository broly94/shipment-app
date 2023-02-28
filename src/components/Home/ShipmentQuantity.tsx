import { ShipmentContext } from '@/contex/ShipmentContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { AlertMessage } from './AlertMessage'

export const ShipmentQuantity = () => {

    const { state } = React.useContext(ShipmentContext)

    const quantityShipment = state.shipmentState.filter(interval => interval.enable === false && interval)
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100px'
            }}
        >
            <Typography 
                variant='h6'
                sx={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    textTransform: 'uppercase',
                }}
            >Envios agendados: {quantityShipment.length}</Typography>
        </Box>
    )
}
