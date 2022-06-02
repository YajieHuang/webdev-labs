import React from 'react';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Profile from './Profile';
import NavBar from './NavBar';
import {getHeaders} from './utils';


{/* TODO: Break up the HTML below into a series of React components. */}
class App extends React.Component {  

    constructor(props){
        super(props);
        // initialization code here
        this.getProfileFromServer();
        this.state = {
            user: {}
        }
    }

    getProfileFromServer() {
        fetch('/api/profile', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                user: data
            })
        })
    }


    render () {
        return (
            <div>

                <NavBar 
                    title="Photo App" 
                    username={this.state.user.username}/>

                <section id="main_area">
                    <div id="post_detail" className="modal">
                        <button className="close" >x</button>
                    </div>
                    <div id="fakecontainer">
                        <div id="content">
                            <Stories />
                            <Posts />

                        </div>
                    </div>
                    <div id="recommendations">
                        <Profile />
                        <div className="notice" style={{width: '100%', height: '50px', line_height: '50px', font_size: 'larger', font_weight: '800',}}>
                            Suggestions for you</div>
                        <Suggestions />
                    </div>
                </section>

            </div>
        );
    }
}

export default App;