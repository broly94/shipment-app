import { AppState, ShipmentData } from '@/interfaces/types';
import React from 'react';

export interface ContextContextProps {
    state: AppState,
    setToggleDataEnable: (id: number, motocycle: number) => void
}

export const ShipmentContext = React.createContext<ContextContextProps>({} as ContextContextProps)