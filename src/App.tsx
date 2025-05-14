import Navbar from './components/Navbar';
import ProtectedPage from './components/ProtectedPage';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <ProtectedPage />
    </div>
  );
}

export default App;