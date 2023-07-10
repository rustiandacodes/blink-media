import { createContext, useReducer } from 'react';

export const ArticleContext = createContext();
export const articleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        articles: action.payload,
      };
    case 'DELETE_ARTICLES':
      return {
        articles: state.articles.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export const ArticleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, { articles: [] });
  return <ArticleContext.Provider value={{ ...state, dispatch }}>{children}</ArticleContext.Provider>;
};
