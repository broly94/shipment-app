interface Props {
    enable: boolean
}

const styleTrue = {
    border: '2px solid #34465D'
}

const styleFalse = {
    border: '2px solid green'
}


export const verifyEnableIntervalStyle = ({enable} :Props) => {
    return (enable ? styleTrue : styleFalse)
}