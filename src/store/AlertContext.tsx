import React, { createContext, useReducer } from "react";

import { alertReducer } from "./AlertReducer";

interface iProps {
  children: JSX.Element;
}

export const AlertContext = createContext({
    alert: '',
    setMsg: (msg:string, type:string) => {}
});

export const AlertContextProvider: React.FC<iProps> = (props) => {
    const initState = ''
    const [state, dispatch] = useReducer(alertReducer, initState);

    const setMsg = (msg:string, type:string) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        })

        setTimeout(() => {
            dispatch ({ type: 'REMOVE_ALERT' })
        }, 3000);
    }

  const alertContext = {
    alert: state,
    setMsg
  };

  return (
    <AlertContext.Provider value={alertContext}>
      {props.children}
    </AlertContext.Provider>
  );
};
