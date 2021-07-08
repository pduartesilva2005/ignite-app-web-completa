import { Summary } from './Summary';
import { TransactionTable } from './TransactionTable';
import { Container } from '../styles/components/dashboard';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
