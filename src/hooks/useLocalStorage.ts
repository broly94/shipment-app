import { ShipmentData } from "@/interfaces/types"

interface Props {
    data?: ShipmentData[] | []
    key: string
}

export const setDataLocalStorage = ({ data, key }: Props) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getDataLocalStorage = ({ key }: Props) => {
    return JSON.parse(localStorage.getItem(key) || "[]")
}