import { createContext, useReducer } from 'react';

export const GeneralContext = createContext();
export const generalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAVBAR_SEARCH':
      return {
        searchIcon: action.payload,
      };
    default:
      return state;
  }
};
export const GeneralContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, { general: true, searchIcon: false });
  return <GeneralContext.Provider value={{ ...state, dispatch }}>{children}</GeneralContext.Provider>;
};
