import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionProvider } from './contexts/TransactionContext';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransitionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransitionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransitionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
