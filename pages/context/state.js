// import { createContext, useContext } from 'react';

// const AppContext = createContext();

// export function AppWrapper({ children }) {

//   return (
//     <AppContext.Provider value={sharedState} >
//       {children}
//     </AppContext.Provider>
//   );
// }

import React from "react";

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};