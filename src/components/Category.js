import React from 'react'
import { Link } from 'gatsby'
class Category extends React.Component {
    render(){
        return (
            <article style={{backgroundImage: `url(${this.props.pic})`}}>
                <header className="major">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.desc}</p>
                </header>
                <Link to={this.props.loc} className="link primary"></Link>
            </article>
        )
    }
}

export default Category
