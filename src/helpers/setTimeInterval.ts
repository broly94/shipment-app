import moment from 'moment'
moment.locale('es')

interface setTimeIntervalProps {
    time: string
}

export const setTimeInterval = ({time}: setTimeIntervalProps) => {

    const date = moment(time, "HH:mm")
    const intervalTime = date.format('HH:mm')
    return intervalTime
}
