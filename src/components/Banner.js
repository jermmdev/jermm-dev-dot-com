import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major" style={{backgroundImage: 'url("'+props.backgroundImage+'")'}}>
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                <p>{props.desc}</p>
            </div>
        </div>
    </section>
)

export default Banner
