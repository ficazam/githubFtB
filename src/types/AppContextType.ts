import { UserType } from "./UserType";

export type AppContextType = {
  state: stateType;
  dispatch: (action: dispatchType) => void;
};

export type stateType = {
    userList: UserType[],
    user: UserType,
    repos: any[],
    loading: boolean
}

export type dispatchType = {
  type: string;
  state?: stateType;
  payload?: any;
}