import React from 'react';
import { AppState } from "@/interfaces/types"
import { ShipmentContext } from "./ShipmentContext"
import { setDataLocalStorage } from '@/hooks/useLocalStorage';
// Esta data puede venir de cualquier base de datos
import { dataShipment } from '@/data/dataShipment';
import { dataUsers } from '@/data/dataUser';


export const INITIAL_STATE: AppState = {
    shipmentState: dataShipment,
    users: dataUsers,
    search: dataShipment
}


interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ShipmentProvider = ({ children }: Props) => {

    const [state, setState] = React.useState(INITIAL_STATE)

    return (
        <ShipmentContext.Provider value={{ state, setState }}>
            {children}
        </ShipmentContext.Provider>
    )
}
