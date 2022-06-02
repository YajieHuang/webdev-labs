import React from 'react';
import BookmarkButton from './BookmarkButton';
import LikeButton from './LikeButton'
import {getHeaders} from './utils';

class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            post: props.model
        }
        this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this)
    }
    componentDidMount(){
        // fetch posts and then set the state...
    }

    refreshPostDataFromServer() {
        const url = '/api/posts/' + this.state.post.id
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                post: data
            })
        })
    }


    render() {
        const post = this.state.post;
        return (
            <section className='post'>
                <div className="header">
                    <header>{post.user.username}</header>
                    <button className="dotdotdot">...</button>
                </div>
                <img src={post.image_url} alt={'Post image for story ' + post.id }/>

                <section className='interaction'>
                    <div className='icon_area'>
                        <div className='left_icon'>
                            <LikeButton 
                                likeId={post.current_user_like_id} 
                                postId={post.id}
                                refreshPost={this.refreshPostDataFromServer}
                            />

                            <button className="comment_button"><i className="far fa-lg fa-comment"></i></button>
                            <button className="repost_button"><i className="far fa-lg fa-paper-plane"></i></button>

                        </div>
                        <div className="right_icon">
                            <BookmarkButton 
                                bookmarkId={post.current_user_bookmark_id} 
                                postId={post.id}
                                refreshPost={this.refreshPostDataFromServer}
                            />
                        </div>
                    </div>

                    <div className="likes_info">
                        <strong className="strongfont" id={'like_count_' + post.id}>
                            { post.likes.length} like{ post.likes.length > 1? "s":""} 
                        </strong>
                    </div>
                </section>
            </section>
        )
    }
}

export default Post;

