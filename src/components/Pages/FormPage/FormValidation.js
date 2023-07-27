import { toast } from 'react-toastify';

export const isStartupNameInvalid = (startupName) => {
  if (startupName && startupName.length >= 4) {
    return false;
  } else {
    toast.warn("Startup's name must be at least 4 characters long", {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    return true;
  }
};
