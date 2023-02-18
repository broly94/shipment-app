import { AppState, ShipmentData } from '@/interfaces/types';
import React from 'react';

export interface ContextContextProps {
    state: AppState["shipmentState"],
    persistDataState: (data: ShipmentData[]) => void,
}

export const ShipmentContext = React.createContext<ContextContextProps>({} as ContextContextProps)