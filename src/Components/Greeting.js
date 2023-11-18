import { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: ""
        };
    }

    addName = () => {      
        const { newName } = this.state;
        if (newName !== '') {
            this.setState({
                newName: '',
            });
        }
    }

    handleChange = (e) => {
        this.setState({ newName: e.target.value });
    }

    render() {
        const { newName } = this.state;
        return (
            <div>
                <h2>Bonjour {newName}!</h2>
                <input
                    type="text"
                    value={newName}
                    onChange={this.handleChange}
                    placeholder="Nouveau nom"
                />

            </div>
        );
    }
}

export default Greeting;