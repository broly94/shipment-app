interface verifyEnableIntervalProps {
    enable: boolean
}

const styleTrue = {
    border: '2px solid green'
}

const styleFalse = {
    border: '2px solid red'
}


export const verifyEnableInterval = ({enable} :verifyEnableIntervalProps) => {
    return (enable ? styleTrue : styleFalse)
}