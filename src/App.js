import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Accueil from "./pages/Accueil/Accueil";
import Consumer from "./pages/Consumer/Consumer";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" Component={Accueil}/>
          <Route path="/consumer" Component={Consumer}/>
        </Routes>
       </BrowserRouter>
       {/* <Accueil/> */}
    </div>
  );
}

export default App;
