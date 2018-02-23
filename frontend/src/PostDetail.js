import React, { Component } from 'react'
import { 
    CardPanel, 
    Icon,
    Row,
    Col,
} from 'react-materialize'

class PostDetail extends Component {
    render() {
        return (
            <Row>
                <Col offset='s1 m2 l2' s={10} m={8}>
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
                </Col>
            </Row>
        )
    }
}

export default PostDetail