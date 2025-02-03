import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Importa os estilos globais
import Home from "./pages/Home/Home";
import ContactPage from "./pages/Contact/ContactPage";
import AccommodationList from "./pages/AccomodationList/AccommodationList";
import NavBar from "./components/NavBar/NavBar";
import AccommodationDetail from "./pages/AcommodationDetail/AccommodationDetail";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Cabeçalho  */}
         <NavBar/>

        <main className="app-content">
          <Routes>
            <Route path="/acomodacoes" element={<AccommodationList />} />
            <Route path="/acomodacao/:id" element={<AccommodationDetail />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contato" element={<ContactPage/>} />

          </Routes>
        </main>

        {/* Rodapé */}
        <footer className="app-footer">
          © {new Date().getFullYear()} Acomodações | Feito com 💙
        </footer>
      </div>
    </Router>
  );
}

export default App;
