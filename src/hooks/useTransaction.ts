import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

export function useTransaction() {
  const context = useContext(TransactionContext);

  return context;
}
