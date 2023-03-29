import React, { useState } from "react";

const GlobalVariablesContext = React.createContext("globalvariables")
export const useGlobalVariablesContext = () => React.useContext(GlobalVariablesContext);

export default function GlobalVariablesContextProvider(props) {
    const [darkModeGlobal, setDarkModeGlobal] = useState(false);

    return (
        <GlobalVariablesContext.Provider value={{ darkModeGlobal, setDarkModeGlobal }}>
            {props.children}
        </GlobalVariablesContext.Provider>
    )
}
