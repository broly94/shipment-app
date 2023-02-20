import React from 'react';
import { AppState, ShipmentData } from "@/interfaces/types"
import { ShipmentContext } from "./ShipmentContext"
import { setDataLocalStorage } from '@/helpers/localStorage';
import { useLocalStorage } from '@/hooks/useLocalStorage';
// import { dataShipment } from '@/data/dataShipment';

const stateApp = useLocalStorage()

export const INITIAL_STATE: AppState = {
    shipmentState: stateApp
}


interface ShipmentProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const ShipmentProvider = ({ children }: ShipmentProviderProps) => {

    const [state, setState] = React.useState(INITIAL_STATE)

    const setToggleDataEnable = (id: number, motocycle: number) => {
        setState({
            shipmentState: state.shipmentState.map(({ ...shipment }) => {
                if (shipment.id === id) {
                    shipment.enable = !shipment.enable
                    !shipment.enable ? shipment.motocycle = motocycle - 1 : shipment.motocycle = motocycle + 1
                }
                return shipment
            })
        })

    }


    React.useEffect(() => {
        setDataLocalStorage({ ShipmentData: state.shipmentState })
    }, [state])



    return (
        <ShipmentContext.Provider value={{ state, setToggleDataEnable }}>
            {children}
        </ShipmentContext.Provider>
    )
}
