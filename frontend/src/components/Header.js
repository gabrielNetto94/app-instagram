import React from 'react';
//importa o Link do react para linkar as paginas
import { Link } from 'react-router-dom';
import './Header.css';

//import logo from '../assets/logo.svg';
//import logo from '../assets/camera.svg';

export default function Header(){
    return(
        <header id="main-header">
            <div className="header-content">
                
                <Link to='/'>
                    <img src=""/*{/*usa-se chave para imbutir um código javaScript dentro do HTML */ alt="InstaRocket"/>
                </Link>
                
                <Link to="/new">
                    <img src="" alt="Enviar publicação"/>
                </Link>
                
            </div>
        </header>
    );
}