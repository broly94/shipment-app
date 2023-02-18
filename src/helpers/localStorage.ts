import { ShipmentData } from "@/interfaces/types"

interface setDataLocalStorageProps {
    ShipmentData: ShipmentData[]
}

export const setDataLocalStorage = ({ShipmentData}: setDataLocalStorageProps) => {
    localStorage.setItem("ShipmentData", JSON.stringify(ShipmentData))
}

export const getDataLocalStorage = () => {
    return JSON.parse(localStorage.getItem("ShipmentData")? toString() : 'No existen datos')
}

export const deleteDataLocalStorage = () => {
    localStorage.removeItem("ShipmentData")
}