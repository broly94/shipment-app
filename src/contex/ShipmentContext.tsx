import { AppState, ShipmentData } from '@/interfaces/types';
import React from 'react';

export interface Props {
    state: AppState,
    setState: React.Dispatch<React.SetStateAction<AppState>>,
}

export const ShipmentContext = React.createContext<Props>({} as Props)