import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'

const Header = ({data, props}) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>{data.site.siteMetadata.title}</strong></Link>
        <nav>
            <button className="menu-link" style={{boxShadow: 'none'}} onClick={props.onToggleMenu}>Menu</button>
        </nav>
    </header>
)


export default props => (
    <StaticQuery
        query={
            graphql`
                query {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
        `}
        render={data => <Header data={data} props={props}></Header>}
    >
    </StaticQuery>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
    , data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
}