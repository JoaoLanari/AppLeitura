import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import {
    CardPanel,
    Icon,
    Row,
    Col,
} from 'react-materialize'

class PostDetail extends Component {
    
    render() {
        console.log((this.props.post.id))
        return (
            <div>
                <Row>
                    <Col offset='s1 m2 l2' s={10} m={8}>
                        <CardPanel>
                            <div className='post-header'>
                                <h5>
                                    {this.props.post.title}
                                </h5>
                            </div>
                            <p>Autor: {this.props.post.author}
                            </p>
                            <p>
                                {this.props.post.body}
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
                                {this.props.post.voteScore}
                            </span><br />
                            <span style={{ fontSize: '0.8em' }}>
                                Comentários: {this.props.post.commentCount}
                                <button className='icon-button'>
                                    <Icon tiny>mode_edit</Icon>
                                </button>
                            </span>
                            {/*<hr />
                            <p>Autor: </p>
                            <p>Conteúdo </p>
                            <hr />
                            <p>Autor: </p>
                            <p>Conteúdo </p>*/}
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps({ posts }) {

    
    return {
        post: _.mapValues(posts.postSelected)
    }
}

export default connect(mapStateToProps)(PostDetail)