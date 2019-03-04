import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

import axios from 'axios'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            accessToken: false,
            userInfo: false
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
        
        let accessToken = false
        if(!this.state.accessToken){
            let fullurl = window.location.toString()
            let accessTokenMarker = 'access_token'
            let accessTokenIndex = fullurl.search(accessTokenMarker)
            if(accessTokenIndex > -1){
                let closingAndIndex = fullurl.indexOf('&', accessTokenIndex)
                accessToken = fullurl.substring(accessTokenIndex+accessTokenMarker.length+1, closingAndIndex)
                this.setState({accessToken: accessToken})
            }
        }else{
            accessToken = this.state.accessToken
        }
        if(accessToken && !this.state.userInfo){
            axios.get('https://auth.jermmdev.com/oauth2/userInfo', { headers: { Authorization: 'Bearer ' + accessToken } } ).then(response => {
                this.setState({userInfo: response.data})
            }).catch(err => {
                console.error('Error loading user info.', err)
            })
        }
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <Footer />
                </div>
                <Menu backPath={this.props.backPath} accessToken={this.state.accessToken} userInfo={this.state.userInfo} onToggleMenu={this.handleToggleMenu} />
            </div>
        )
    }
}

export default Layout
