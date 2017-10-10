import React from 'react'

import 'bulma/css/bulma.css'

export default class Toolbar extends React.Component {
    render() {
        return (
            <section class='hero is-primary is-small'>
                <div class='hero-head'>
                    <div class="nav-right nav-menu">
                        <a class='nav-item' href='/login'>
                            Login
                        </a>
                    </div>
                </div>
                <div class='hero-body'>
                    <h1 class='title'>
                        Commonwealth Chronicle
                    </h1>
                    <h2 class='subtitle'>
                        School Newspaper
                    </h2>
                </div>
            </section>
        )
    }
}