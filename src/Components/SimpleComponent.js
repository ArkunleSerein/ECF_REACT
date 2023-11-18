import { Component } from 'react'

class SimpleComponent extends Component {


    state = {
        titre: "hello World",
    }

    render() {
        return (
            <h1>{this.state.titre}</h1>
            
        )
    }
}

export default SimpleComponent