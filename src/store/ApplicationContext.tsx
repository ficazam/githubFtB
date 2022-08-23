import React, { useReducer, createContext } from "react";

import { AppContextType, stateType, dispatchType } from "../types/AppContextType";
import { emptyUser } from "../types/UserType";

import { githubReducer } from "./GithubReducer";

interface iProps {
  children: JSX.Element;
}

export const ApplicationContext = createContext<AppContextType>({
  state: { userList: [], user: emptyUser, repos: [], loading: false },
  dispatch: (action: dispatchType) => {},
});

export const ApplicationContextProvider: React.FC<iProps> = (props) => {
  const initState: stateType = {
    userList: [],
    user: emptyUser,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initState);

  const contextData = {
    state,
    dispatch,
  };

  return (
    <ApplicationContext.Provider value={contextData}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
