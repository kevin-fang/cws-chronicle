import React from 'react'

import 'bulma/css/bulma.css'

export default class Toolbar extends React.Component {
    render() {
        return (
            <section className='hero is-primary is-small'>
                <div className='hero-head'>
                    <div className="nav-right nav-menu">
                        <a className='nav-item' href='/login'>
                            Login
                        </a>
                        <a className='nav-item' href='/submit'>
                            Submit
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