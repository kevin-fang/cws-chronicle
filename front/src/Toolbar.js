import React from 'react'

import 'bulma/css/bulma.css'

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }

    render() {
        return (
            <section className='hero is-primary is-small'>
                <div className='hero-head'>
                    <div className="nav-right">
                        <a className='nav-item' href='/submit'>
                            Submit
                        </a>
                        <a className='nav-item' href='/manage'>
                            Manage
                        </a>
                        <a className='nav-item' href={this.state.loggedIn ? "/logout" : "/login"}>
                            {this.state.loggedIn ? "Logout" : "Login"}
                        </a>
                    </div>
                </div>
                <div className='hero-body'>
                    <h1 className='title'>
                        Commonwealth Chronicle
                    </h1>
                    <h2 className='subtitle'>
                        School Newspaper
                    </h2>

                </div>
            </section>
        )
    }
}