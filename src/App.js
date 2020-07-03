import React from 'react';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.zero = this.zero.bind(this)
    }
    increment() {
        this.setState(prevState => {
            return {count: prevState.count + 1}})
    }
    decrement() {
        this.setState(prevState => {
            return {count: prevState.count - 1}})
    }
    zero() {
        this.setState({count: 0})
    }
    render() {
        return <div className={"mainsection"}>
            <h1 className={"App"}> { this.state.count } </h1>
            
            <div> 
            <button className={"increment"} onClick = { this.increment }> + </button>
            <button className={"reset"} onClick = { this.zero }> Reset </button>
            <button className={"decrement"} onClick = { this.decrement }> - </button>
            </div>
        </div>
    }
}

export default App;