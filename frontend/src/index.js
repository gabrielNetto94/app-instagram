import React from 'react';
//ReactDOM integração da react com o browser
import ReactDOM from 'react-dom';
import App from './App';
//importa config geral do css da aplicação 
import './global.css';

//"insere o "App.js" dentro do "index.html" na div "root"
ReactDOM.render(<App />, document.getElementById('root'));