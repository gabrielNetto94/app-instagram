import React, {Component } from 'react';
import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component{

    //variavel dentro do componente que armazena as informações
    state = {
        feed: [],
    };

    async componentDidMount(){
        //quanto o componente é executado este método é executado, tipo um construtor
        const response = await api.get('posts');//executa o método da api


        //ao final da chamada do método da api, altera o valor do estado 
        this.setState({ feed:response.data });
    }

    render(){
        return (
            <section id="post-list">
            {this.state.feed.map(post => (
                    /* "key={post.id} coloca um id em cada post que é um article */
                    <article key={post.id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            
                            <img src={more} alt="Mais"/>
                        </header>

                        <img src={'http://172.16.0.9:3333/files/'+post.image} alt="" />
                        
                        <footer>
                            <div className="actions">
                                <button type="button" >
                                    <img src={like} alt="like" />
                                </button>
                                <img src={comment} alt="comment" />
                                <img src={send} alt="enviar" />
                            </div>
                            <strong>{post.likes} curtidas</strong>
                            
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                            
                        </footer>
                    </article>
            ))}
            </section>
        );
    }
}

export default Feed;