import React, {Component } from 'react';
import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import io from 'socket.io-client';

class Feed extends Component{

    //variavel dentro do componente que armazena as informações
    state = {
        //array dos posts
        feed: [],
    };

    async componentDidMount(){
        
        this.registerToSocket();

        //quanto o componente é executado este método é executado, tipo um construtor
        const response = await api.get('posts');//executa o método da api


        //ao final da chamada do método da api, altera o valor do estado 
        this.setState({ feed:response.data });
    }
    
    registerToSocket = () => {
        const socket = io('http://localhost:3333');
        
        //atualiza o feed com um novo post
        socket.on('post', newPost => {
            //o feed que é um array, vai receber um novo post e mais o restante de posts que já existem
            this.setState({ feed: [newPost, ... this.state.feed] });
        })

        //atualiza o post com um novo like
        socket.on('like', likedPost => {
            this.setState({
                    feed: this.state.feed.map(post => 
                        post._id === likedPost._id ? likedPost : post
                )
            });
        })
    }

    handleLike = id =>{
        //cria o método para dar like no post
        api.post('/posts/'+id+'/like');
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

                        <img src={'http://localhost:3333/files/'+post.image} alt="" />
                        
                        <footer>
                            <div className="actions">
                                <button type="button">
                                    
                                    <img src={like} onClick={() => this.handleLike(post._id)/*cria um arrow function "() =>", passando a função
                                    this.handleLike como parâmetro e não executando ela*/ } alt="like" />
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