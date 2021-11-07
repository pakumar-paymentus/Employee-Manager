import { createContext, useContext } from "react";
import { useState } from "react";
const ShowUsersContext = createContext();

export function UserContextProvider({children}){
    const [showUsers, setShowUsers] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    const usersContext = {showUsers, setShowUsers};
    const welcomeContext = {showWelcome, setShowWelcome};

    const value = { usersContext, welcomeContext };

    return(
        <ShowUsersContext.Provider value={value}>
        {children}
        </ShowUsersContext.Provider>
    )
}

export function useUserContext(){
    return useContext(ShowUsersContext);
}