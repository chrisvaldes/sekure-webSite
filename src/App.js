import './App.css'; 
import NavBar from './components/NavBar';
import Index from './IndexFolder';
import Button from './IndexFolder/Button';
import Acceuil from './pages/Accueil/Acceuil';

function App() {
  return (
    <div className="App">
       {/* <Index/>
       <Button children="Button" color="cyan" size="md"/> */}
       <Acceuil/>
    </div>
  );
}

export default App;
