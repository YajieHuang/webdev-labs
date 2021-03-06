import React from 'react';
import {getHeaders} from './utils';

class LikeButton extends React.Component{

    constructor(props){
        super(props);
        this.toggleLike = this.toggleLike.bind(this)
        this.createLike = this.createLike.bind(this)
        this.removeLike = this.removeLike.bind(this)
    }
    componentDidMount(){
        // fetch posts and then set the state...

    }

    toggleLike() {
        if(this.props.likeId){
            this.removeLike()
        }
        else{
            this.createLike();
        }
    }

    createLike() {
        const url = '/api/posts/likes'
        const postData = {
            post_id: this.props.postId
        }
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)

        }).then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.refreshPost();
        })

    }

    removeLike() {
        const url = '/api/posts/likes/' + this.props.likeId
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.refreshPost();
        })

    }

    render() {
        const likeId = this.props.likeId;
        const heartClass = (likeId ? 'fas' : 'far') + ' fa-lg fa-heart';
        return (
            <button 
                onClick={this.toggleLike}
                className={likeId ? 'liked' : 'not_like_yet'}
                aria-label="like / unlike"
            >
                <i className={heartClass}></i>
            </button>
        )
    }
}

export default LikeButton;

