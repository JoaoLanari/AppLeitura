import React, { Component } from 'react'
import { CardPanel, Icon } from 'react-materialize'

class Post extends Component {
    render() {
        let { post } = this.props
        return (
            <CardPanel>
                <a href='#' className='post-header'><h5>{post.titulo}</h5></a>
                <p>{post.conteudo}</p>                
                <span><button className='icon-button'><Icon tiny>thumb_up</Icon></button></span>
                <span><button className='icon-button'><Icon tiny>thumb_down</Icon></button></span><br />
                <span style={{ fontSize: '0.8em' }}>Score: {post.voteScore}</span><br />
                <span style={{ fontSize: '0.8em' }}>
                    Comentários: 10
                    <button className='icon-button'><Icon tiny>mode_edit</Icon></button>
                </span>
            </CardPanel>
        )
    }
}


export default Post