import React from 'react'
class Post extends React.Component {
    render(){
        return (
            <section>
                <div className="inner">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Post
