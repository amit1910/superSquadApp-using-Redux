import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Herolist from './HeroList';
import '../styles/index.css';


class App extends Component {
    render() {
        return(
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="row">
                <div className="col-lg-6">
                <CharacterList />
                </div>
               
                <div className="col-lg-6">
                <Herolist />    
                </div>
                </div>
            </div>
        );
    }
}
export default App;