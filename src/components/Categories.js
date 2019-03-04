import React from 'react'
class Categories extends React.Component {
    render(){
        return (
            <section className="tiles">
                {this.props.children}
            </section>
        )
    }
}

export default Categories
