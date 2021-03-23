import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  isPartner: false,
  user: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLogin: true,
        isPartner: false,
      };
    case "LOGIN_PARTNER":
      return {
        ...state,
        isLogin: true,
        isPartner: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
