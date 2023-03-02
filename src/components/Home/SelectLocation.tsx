import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { ShipmentContext } from '@/contex/ShipmentContext'

export const SelectLocation = () => {

  const { state, setState } = React.useContext(ShipmentContext)

  const [term, setTerm] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    filtro(event.target.value)
  }

  const filtro = (filterSearch: string) => {
    let resultSearch = state.search.filter(elemento => {
      if (elemento.city.toString().toLowerCase().includes(filterSearch.toString().toLocaleLowerCase())) {
        return elemento
      }
    })
    setState({
      shipmentState: resultSearch,
      users: state.users,
      search: state.search
    })
  }

  React.useEffect(() => {
    setState({
      shipmentState: state.shipmentState,
      users: state.users,
      search: state.search
    })
  }, [])


  return (
    <Box sx={{ minWidth: '70%' }}>
      <TextField
        id="outlined-search"
        label="Busca por localidad"
        type="search"
        value={term}
        onChange={handleChange}
        fullWidth
        focused
        color='grey'
      />
    </Box>
  )
}