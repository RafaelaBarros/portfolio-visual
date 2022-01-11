// Estilização
import './App.css';

// Ícone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // SEM ELE NÃO APARECE
import Button from 'react-bootstrap/Button';

import logo from './logo.svg';

// Botão vai ter uma função @click que altera a visibilidade do SIDEBAR

function Header() {
  return (
      <header className="App-header">
        <div className="Logo">
        <Button variant="outline-light" id='botao-sidebar' > <FontAwesomeIcon icon="bars" />
 </Button>
        <img src={logo} alt="Logo react"></img>
        <p>
          Nome do Site
        </p>
        </div>
        
      </header>
  );
};

export default Header;