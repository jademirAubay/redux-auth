import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const ProtectedPage = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <p>Acesso negado. Faça login primeiro.</p>;
  }

  return (
    <div>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit repellendus inventore eveniet, ea sapiente veniam temporibus sed, illum officia qui ullam ipsa laudantium voluptatem voluptas deleniti exercitationem in officiis. Ducimus praesentium quisquam molestiae, consequatur qui deserunt dignissimos maxime, facilis atque quidem beatae accusamus sit sint commodi consequuntur harum fugit voluptatem quaerat inventore voluptates nesciunt repudiandae et? Molestias cum inventore temporibus suscipit cupiditate reiciendis esse illum, nisi numquam fuga aperiam obcaecati recusandae. Sed beatae nulla at quasi iure quos a soluta porro neque, velit veniam hic mollitia dolorum nihil dolores culpa atque vitae modi? Cumque reiciendis culpa dolorum exercitationem excepturi.</p>
    </div>
  );
};

export default ProtectedPage;