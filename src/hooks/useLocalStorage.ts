import { getDataLocalStorage } from "@/helpers/localStorage"
import { dataShipment } from '@/data/dataShipment';
import { ShipmentData } from "@/interfaces/types";

export const  useLocalStorage = (): ShipmentData[]  => {

    let localData: ShipmentData[] = getDataLocalStorage()
    return localData.length > 0 ? localData : dataShipment

 
}