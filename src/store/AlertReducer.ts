export const alertReducer = (state: string, action: any) => {
  switch (action.type) {
    case "SET_ALERT": return action.payload.msg;
    case "REMOVE_ALERT": return "";
    default: return state;
  }
};
