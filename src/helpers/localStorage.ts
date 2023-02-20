import { ShipmentData } from "@/interfaces/types"

interface setDataLocalStorageProps {
    ShipmentData: ShipmentData[]
}

export const setDataLocalStorage = ({ShipmentData}: setDataLocalStorageProps) => {
    return localStorage.setItem("ShipmentData", JSON.stringify(ShipmentData))
}

export const getDataLocalStorage = ()=> {
    return JSON.parse(localStorage.getItem("ShipmentData") || "[]")
}

export const deleteDataLocalStorage = () => {
    localStorage.removeItem("ShipmentData")
}