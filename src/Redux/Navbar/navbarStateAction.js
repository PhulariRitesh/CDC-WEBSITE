import { navbarState } from "./navbarStateType";

const navbarStateAction = () => {
    return {
        type:navbarState,
        currentState:"close",

    }
}
export default navbarStateAction;