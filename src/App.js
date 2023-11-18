import { Component } from 'react';
import './App.css';
import SimpleComponent from './Components/SimpleComponent';
import Greeting from './Components/Greeting';
import { NameList } from './Components/NameList';
import ConditionalRender from './Components/ConditionalRender';


class App extends Component {

  state = {
    names: ['Toto', 'Tata', 'Titi', 'Tutu', 'Tete']
  }

  state4 = {
    userResponse: '',
  };

  handleUserResponseChange = (event) => {
    this.setState({ userResponse: event.target.value });
  }

  render() {
    return (
      <div className='App'>
        <h1>ECF REACT</h1>

        <h2>Exercice 1</h2>
        <SimpleComponent />

        <h2>Exercice 2</h2>
        <Greeting />

        <h2>Exercice 3</h2>
        <h2>Liste de noms</h2>
        <NameList names={this.state.names} />

        <h2>Exercice 4</h2>
        <h2>Aimez-vous React ?</h2>
        <div>
          <label>Oui</label>
          <input
            type="radio"
            value="Oui"
            checked={this.state.userResponse === 'Oui'}
            onChange={this.handleUserResponseChange}
          />
          <label>Non</label>
          <input
            type="radio"
            value="Non"
            checked={this.state.userResponse === 'Non'}
            onChange={this.handleUserResponseChange}
          />
          <ConditionalRender condition={this.state.userResponse === 'Oui'} />
        </div>
        
      </div>
    )
  }
}

export default App;
