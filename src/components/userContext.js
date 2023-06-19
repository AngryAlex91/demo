import React from "react";

const UserContext = React.createContext('alex');

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserContext, UserProvider, UserConsumer };