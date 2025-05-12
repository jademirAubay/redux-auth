import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const ProtectedPage = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <p>Acesso negado. Faça login primeiro.</p>;
  }

  return <div>Conteúdo secreto aqui 👀</div>;
};

export default ProtectedPage;