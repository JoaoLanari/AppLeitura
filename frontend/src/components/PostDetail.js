import React, { Component } from 'react'
import {
    CardPanel,
    Icon,
    Row,
    Col,
} from 'react-materialize'

class PostDetail extends Component {
    render() {
        let array = this.props.location.pathname.split('/')
        let postId = array[2]
        return (
            <div>
                <Row>
                    <Col offset='s1 m2 l2' s={10} m={8}>
                        <CardPanel>
                            <div className='post-header'>
                                <h5>
                                {this.props.posts.filter(post => post.id === postId)
                                    .map(post => (
                                        post.titulo
                                    ))
                                }
                                </h5>
                            </div>
                            <p>Autor: {this.props.posts.filter(post => post.id === postId)
                                    .map(post => (
                                        post.autor
                                    ))
                                }
                            </p>
                            <p>
                                {this.props.posts.filter(post => post.id === postId)
                                    .map(post => (
                                        post.conteudo
                                    ))
                                } 
                            </p>
                            <span>
                                <button className='icon-button'>
                                    <Icon tiny>thumb_up</Icon>
                                </button>
                            </span>
                            <span>
                                <button className='icon-button'>
                                    <Icon tiny>thumb_down</Icon>
                                </button>
                            </span><br />
                            <span style={{ fontSize: '0.8em' }}>Score: 
                                {this.props.posts.filter(post => post.id === postId)
                                    .map(post => (
                                        post.voteScore
                                    ))
                                } 
                            </span><br />
                            <span style={{ fontSize: '0.8em' }}>
                                Comentários: 10
                                <button className='icon-button'>
                                    <Icon tiny>mode_edit</Icon>
                                </button>
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
            </div>
        )
    }
}

export default PostDetail