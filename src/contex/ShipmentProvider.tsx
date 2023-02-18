import React from 'react';
import { AppState, ShipmentData } from "@/interfaces/types"
import { ShipmentContext } from "./ShipmentContext"

export const INITIAL_STATE = {
    infoInterval: [
        {
            id: 0,
            time: '00:00',
            motocycle: 8,
            enable: true
        }
    ]
}


interface ShipmentProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const ShipmentProvider = ({ children }: ShipmentProviderProps) => {

    const [state, setSection] = React.useState<AppState["shipmentState"]>(INITIAL_STATE.infoInterval)

    const persistDataState = (data: ShipmentData[]) => {
        setSection(data)
    }

    return (
        <ShipmentContext.Provider value={{ state, persistDataState }}>
            {children}
        </ShipmentContext.Provider>
    )
}
