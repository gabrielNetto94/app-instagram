import React from 'react';
import {Switch, Route} from 'react-router-dom';

//importa os arquivos Feed e New
import Feed from './pages/Feed';
import New from './pages/New';

//criação das rotas, que serão acessadas pela url
function Routes(){
    return (
        //switch é usada para retonar a rota exata para o usuário
        //o comando "exact" garante isso, retornando apenas a rota Feed
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />            
        </Switch>

    );
};

export default Routes;