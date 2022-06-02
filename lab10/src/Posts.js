import React from 'react';
import {getHeaders} from './utils';
import Post from './Post';

class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
        this.getPostsFromServer()
    }
    componentDidMount(){
        // fetch posts and then set the state...

    }

    getPostsFromServer() {
        fetch('/api/posts', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts: data
            })
        })
    }


    render() {
        return this.state.posts.length === 0 ? 
            (
                <section className='post' style={{backgroundColor: 'transparent', border: 'none'}}>Loading posts...</section>
            )
        :(
        
            this.state.posts.map(post=>{
                return (
                    <Post key={'post_' + post.id}model={post}/>
                )
            })
        )
    }
}

export default Posts;

