import React, { Component } from 'react'
import {
    Link,
    Route
} from 'react-router-dom'
import { CardPanel } from 'react-materialize'

class PostSummary extends Component {
    render() {
        let { post } = this.props
        const url = `/react_1`
        return (
            <div>
                <CardPanel>
                    <Link to={url} className='post-header'><h5>{post.titulo}</h5></Link>
                    <p>{post.conteudo}</p>
                    <span style={{ fontSize: '0.8em' }}>Score: {post.voteScore}</span><br />
                    <span style={{ fontSize: '0.8em' }}>
                        Comentários: 10
                    </span>
                </CardPanel>

            </div>
        )
    }
}
    


export default PostSummary