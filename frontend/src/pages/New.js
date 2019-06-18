import React, {Component } from 'react';
import api from '../services/api';

import './New.css';

class New extends Component{

    //estado da classe, inicialmente começa em branco
    state = {
        image:null,
        author: '',
        place: '',
        description: '',
        hashtags:  '',
    };

    handleSubmit = async e =>{//método assíncrono para utilizar o await e enviar as informações para o backend
        e.preventDefault();
        
        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);        
        data.append('hashtags', this.state.hashtags);        
        
        await api.post('posts', data)

        //deopis de realizar o post, manda o usuário para outra rota, no caso a tela inicial
        this.props.history.push('/');

    }

        
        //método que recebe um evento do HTML, que é usado para tratar imagem
    handleImageChange = e => {
        this.setState({image: e.target.files[0] });
    }

    //função handleChange, recebe um evento "e" do HTML
    handleChange = e => { //esse formato de função é utilizado para acessar o método this da classe
        this.setState({ [e.target.name]: e.target.value });
    }
    

    render(){
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange}/>
                
                <input
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.state.place} 
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                
                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />

                <button type="submit">Enviar</button>

            </form>
        );
    }
}

export default New;