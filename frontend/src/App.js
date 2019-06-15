import React from 'react';
//quanto utilizamos o react-router-dom é necessário colocar o <BrowserRouter> em volta das rotas
import {BrowserRouter} from 'react-router-dom';

//importa as rotas que foram criadas
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      
      {/* <Header/> */}
      <Routes />
    </BrowserRouter>
    
  );
}

/**
 * PAREI EM 18MIN DO VÍDEO!!
 */
export default App;