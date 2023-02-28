import { getDataLocalStorage } from "@/hooks/useLocalStorage"
import { ShipmentData, User } from "@/interfaces/types";

type defaultDataState = {
    shipmentData: ShipmentData[]
    user: User[]
}

interface Props {
    keyData: string
    defaultData: defaultDataState
}

export const  useSetDataInitialState = ({keyData, defaultData}: Props) => {

    let localData = getDataLocalStorage({key: keyData})

    if(keyData === "shipmentDataLocal"){
        return localData.length > 0 ? localData : defaultData.shipmentData
    }

    if(keyData === "userDataLocal"){
        return localData.length > 0 ? localData : defaultData.user
    }

    return 

}