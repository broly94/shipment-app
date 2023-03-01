import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { ShipmentContext } from '@/contex/ShipmentContext'
import { dataShipment } from '@/data/dataShipment';
import { ShipmentData } from '@/interfaces/types';

export const SelectLocation = () => {

  const { state, setState } = React.useContext(ShipmentContext)

  const [table, setTable] = React.useState<ShipmentData[]>([])
  
  const [search, setSearch] = React.useState<string>('')


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    filtro(event.target.value)
  }

  const filtro = (filtroBusqueda: string) => {
    let resultadosBusqueda = table.filter(elemento => {
      if (elemento.city.toString().toLowerCase().includes(filtroBusqueda.toString().toLocaleLowerCase())) {
        return elemento
      }
    })
    setState({
      shipmentState: resultadosBusqueda,
      users: { ...state.users },
      locations: { ...state.locations }
    })

  }

  React.useEffect(() => {
    setState({
      shipmentState: dataShipment,
      users: { ...state.users },
      locations: { ...state.locations }
    })
    setTable(dataShipment)
    console.log(table)
  }, [])

  return (
    <Box sx={{ minWidth: 600 }}>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={search}
        onChange={handleChange}
      />
    </Box>
  )
}