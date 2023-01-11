import { toast } from 'react-toastify';

export const notify = (text , type) => {
    if(type === "success"){
        toast.success(text, {
            position: "bottom-right",
            autoClose: 5000,
            theme:"colored"
        });
    } else if(type === "error"){
        toast.error(text, {
            position: "bottom-right",
            autoClose: 5000,
            theme:"colored"
        });
    }

};
