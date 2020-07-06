import React, { Component } from 'react'

class Posts extends Component {

    constructor (props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount () {
        this.getPosts();
    }

    getPosts = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        this.setState({
            posts
        });
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                {postItems}
            </div>
        )
    }
}

export default Posts;
