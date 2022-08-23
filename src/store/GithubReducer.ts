import { stateType, dispatchType } from "../types/AppContextType";

export const githubReducer = (state: stateType, action: dispatchType) => {
  switch(action.type) {
    case 'GET_USERS' : return {...state, userList: action.payload, loading: false}
    case 'SET_LOADING' : return{...state, loading: true}
    case 'CLEAR_USERS' : return {...state, userList: [], loading: false}
    case 'SET_USER': return {...state, user: action.payload, loading: false}
    case 'GET_REPOS': return {...state, repos: action.payload, loading: false}
    default: return state
  }
}
