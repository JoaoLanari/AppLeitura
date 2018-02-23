import React, { Component } from 'react'
import { CardPanel, Icon } from 'react-materialize'

class PostDetail extends Component {
    render() {
        return (
            <CardPanel>
                <div className='post-header'>
                    <h5>Título</h5>
                </div>
                <p>Autor: </p>
                <p>Conteúdo </p>                 
                <span><button className='icon-button'><Icon tiny>thumb_up</Icon></button></span>
                <span><button className='icon-button'><Icon tiny>thumb_down</Icon></button></span><br />
                <span style={{ fontSize: '0.8em' }}>Score: </span><br />
                <span style={{ fontSize: '0.8em' }}>
                    Comentários: 10
                    <button className='icon-button'><Icon tiny>mode_edit</Icon></button>
                </span>
                <hr />
                <p>Autor: </p>
                <p>Conteúdo </p>
                <hr />
                <p>Autor: </p>
                <p>Conteúdo </p>  
            </CardPanel>
        )
    }
}

export default PostDetail