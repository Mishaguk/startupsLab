import toastr from "toastr"
import '../../../../node_modules/toastr/build/toastr.min.css'

export const isStartupNameInvalid = startupName => {
    if (startupName && startupName.length >= 4) {
       
        return false
    } else {
        toastr.warning(`Startup's name must be at least 4 characters long`)
        return true
    }
}