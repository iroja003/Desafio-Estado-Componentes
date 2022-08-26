import './App.css';
import Header from './components/Header/Header';
import Footer from  './components/Footer/Footer';
import Formulario from './components/Formulario/Formulario'

function App() {
  return (
    <div className="App">
       <Header partitle="Desafio Estados de los Componentes y Eventos"/>
       <Formulario />
       <Footer />
    </div>
  );
}

export default App;
