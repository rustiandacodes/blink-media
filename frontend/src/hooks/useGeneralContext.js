import { GeneralContext } from '../context/generalContext';
import { useContext } from 'react';

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw Error('useTodosConteaxt must be used inside an TodosContextProvider');
  }
  return context;
};
