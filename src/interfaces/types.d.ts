export interface ShipmentData {
    id: number
    time: string
    motocycle: number
    city: string
    enable: boolean
}

export interface User {
    id: number
    userName: string
    quantityShipment: number
    hoursShipments: string[]
}

export interface Locations {
    id: number
    name: string
}

export interface AppState {
    shipmentState: ShipmentData[]
    users: User[],
    locations: Locations[]
}