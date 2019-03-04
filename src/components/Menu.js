import React from 'react'
import { Link } from 'gatsby'
class Menu extends React.Component {
    render(){
        return (
            <nav id="menu">
                <div className="inner">
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        {this.props.backPath ? <li><Link to={this.props.backPath}>Back</Link></li> : null}
                        {this.props.accessToken ? <li><a href="https://auth.jermmdev.com/logout?client_id=66ujehirtr22p2jfp97amkdrdm&logout_uri=http://localhost:8000/">{this.props.userInfo ? "Sign Out as " + this.props.userInfo.username : "Sign Out"}</a></li>:null}
                        {!this.props.accessToken ? <li><a href="https://auth.jermmdev.com/login?response_type=token&client_id=66ujehirtr22p2jfp97amkdrdm&redirect_uri=http://localhost:8000/">Sign In</a></li> : null}
                    </ul>
                </div>
                <button className="close" style={{boxShadow: 'none'}} onClick={this.props.onToggleMenu}>Close</button>
            </nav>
        )
    }
}

export default Menu
