import React from 'react';

class NavBar extends React.Component{

    constructor(props){
        super(props);
        console.log('Navbar props: ', props)
    }

    componentDidMount(){
        // fetch posts and then set the state...

    }

    render() {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1> 
                {this.props.username}
            </nav>
        )
    }
}

export default NavBar;

