import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { ShipmentContext } from '@/contex/ShipmentContext'
import { dataShipment } from '@/data/dataShipment';
import { ShipmentData } from '@/interfaces/types';

export const SelectLocation = () => {

  const { state, setState } = React.useContext(ShipmentContext)

  const [location, setLocation] = React.useState('')

  const [shipmetFilter, setShipmentFilter] = React.useState<ShipmentData[]>([])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    filtro(event.target.value)
  }

  const filtro = (filtroBusqueda: string) => {
    let resultadosBusqueda = state.shipmentState.filter(elemento => {
      if (elemento.city.toString().toLowerCase().includes(filtroBusqueda.toString().toLocaleLowerCase())) {
        return elemento
      }else {
        state.shipmentState
      }
    })
    setShipmentFilter(resultadosBusqueda)
    
  }

  React.useEffect(() => {
    setState({
      shipmentState: dataShipment,
      users: {...state.users},
      locations: {...state.locations}
    })
    setShipmentFilter(dataShipment)
  }, [])

  return (
    <Box sx={{ minWidth: 600 }}>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={location}
        onChange={handleChange}
      />
    </Box>
  )
}