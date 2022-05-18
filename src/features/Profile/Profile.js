import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

class Profile extends React.Component {
    pages = ["home", "blog", "about me", "pics", "contact"]
    render() {
        return (
            <div>
                <NavBar pages={this.pages} title="Hola Mundo" />
                <h1>Welcome to my Blog {':)'}</h1>
                <p>I am developer since 12 year ago blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah</p>
                <img width="640"src="https://picsum.photos/640" />

            </div>
        )
    }
}

export default Profile;
