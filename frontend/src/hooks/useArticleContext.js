import { ArticleContext } from '../context/articleContext';
import { useContext } from 'react';

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw Error('useArticleContext must be used inside an ArticleContextProvider');
  }
  return context;
};
