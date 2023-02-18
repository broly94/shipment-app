export interface ShipmentData {
    id: number
    time: string
    motocycle: number
    enable: boolean
}

export interface AppState {
    shipmentState: ShipmentData[],
}