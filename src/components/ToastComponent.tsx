import { toast } from 'react-toastify';

interface Props {
    enable: boolean
    type: string,
    messageSuccess: string
    messageCanceledOrError: string
}

export const ToastComponent = ({ enable, type, messageSuccess,  messageCanceledOrError}: Props) => {

    let Toast

    if(type === 'shipment'){
        Toast = enable ?
        toast.success(messageSuccess, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }) :
        toast.warn(messageCanceledOrError, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    

    return (
        Toast
    )
}
