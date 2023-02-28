import React from 'react';
import { AppState, ShipmentData, User } from "@/interfaces/types"
import { ShipmentContext } from "./ShipmentContext"
import { setDataLocalStorage } from '@/hooks/useLocalStorage';
import { useSetDataInitialState } from '@/hooks/useSetDataInitialState';
// Esta data puede venir de cualquier base de datos
import { dataShipment } from '@/data/dataShipment';
import { dataUsers } from '@/data/dataUser';
import { dataLocations } from '@/data/dataLocations';

// const shipmentDataInitialState: ShipmentData[] = useSetDataInitialState({keyData: "shipmentDataLocal",  defaultData: { shipmentData: dataShipment, user: dataUsers}})

// const userDataInitialState: User = useSetDataInitialState({keyData: "userDataLocal", defaultData: { shipmentData: dataShipment, user: dataUsers}})


export const INITIAL_STATE: AppState = {
    shipmentState: dataShipment,
    users: dataUsers,
    locations: dataLocations
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
