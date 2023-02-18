
import { ShipmentProvider } from '@/contex/ShipmentProvider'
import { Home } from '@/pages/Home'

function App() {

  return (
    <div className="App">
      <ShipmentProvider>
        <Home />
      </ShipmentProvider>
    </div>
  )
}

export default App