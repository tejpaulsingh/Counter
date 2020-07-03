import React from 'react';

import "./Header.css";

class Header extends React.Component {
    constructor(props){
        super(props)
        this.setState = {

        }
    }
    render() {
        return (
            <div className={"header"}>
                <h1 className={"text"}>Counter</h1> 
            </div>
        )
    }
}

export default Header