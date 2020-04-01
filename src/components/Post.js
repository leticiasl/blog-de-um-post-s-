import React, { Component } from 'react';
import axios from 'axios'


class Post extends Component {

    state = {
        post: {
            id: "1",
            title: "titulo",
            body: "body"
        }
    }
 
    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                this.setState({ post: res.data });
            });
    }
 

    proximoPost = () => {
        let id = parseInt(this.state.post.id)
        id = id + 1
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState({ post: res.data });
            });
    }

    postAnterior = () => {
        let id = parseInt(this.state.post.id)
        id = id - 1
        if(id < 1){
            id = 1
        }
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState({ post: res.data });
            }); 
    }
 
    render() {
        return (
            <div>
                <h1>{this.state.post.title}</h1>
                <p>
                    {this.state.post.body}
                </p>
                <p>id: post {this.state.post.id}</p>
                <button onClick={this.postAnterior}>Post Anterior</button>
                <button onClick={this.proximoPost}>Proximo Post</button>
            </div>
        )
    }
}

export default Post;
