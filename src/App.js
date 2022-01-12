// Estilização
import './App.css';

// Componentes de Navegacao
import Header from './navegacao/Header';
import Footer from './navegacao/Footer';

// Ícones
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons' // Importar cada ícone

library.add(faBars) // E chamar

// TODO: Um evento no Header alterando uma variávei local/pai (que é parâmetro do './navegacao/Sidebar.js')
// OU não passa por aqui

// TODO: Rotas!!!

// React-App
function App() {
  return (
    <div className="App">
      <Header />
      <div className="Conteudo-pg">
        <p>Teste de Conteúdo da Página </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
