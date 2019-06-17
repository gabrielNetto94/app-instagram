import React, {Component } from 'react';

import './Feed.css';

//import more from '../'
//import like from '../'
//import comment from '../'
//import send from '../'


class Feed extends Component{
    render(){
        return (
            <section id="post-list">
                <header>
                    <div className="user-info">
                        <span>Gabriel Netto</span>
                        <span className="place">Santa Maria</span>
                    </div>
                    
                    <img src="" alt="Mais"/>
                </header>

                <img src="http://localhost:3333/files/Koala.jpg" alt="" />
            </section>
        );
    }
}

export default Feed;