import React from 'react'

import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {

        }
    }
    render() {
        return (
            <div className={"footer"}>
                <h1 className={"text"}>Tejpaul Singh</h1>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/tsinghkhalsa">
                <img className={"gitlogo"} src="http://pngimg.com/uploads/github/github_PNG75.png" alt="github"></img>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/tejpaul_singh/">
                <img className={"instaLogo"} src="http://pngimg.com/uploads/instagram/instagram_PNG11.png" alt="instagram"></img> 
                </a>
                <div className="contact">
                    <h3>Contact Me:</h3>
                    <p>Email: chilanatejpaul@gmail.com</p>
                    <p>Phone: 845-648-5741</p>
                </div>
            </div>
        )
    }
}

export default Footer