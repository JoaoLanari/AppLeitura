import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import {
    CardPanel,
    Icon,
    Row,
    Col,
    Link,
    Modal,
    Button,
    Input,
    Toast
} from 'react-materialize'

import { votePost, editPost, delePost } from '../actions/index'

class PostDetail extends Component {

    state = {
        title: this.props.post.title,
        body: this.props.post.body
    }

    setTitle(title) {
        this.setState({ title: title })
    }

    setBody(body) {
        this.setState({ body: body })
    }

    vote(vote, voteScore, id) {
        let newVoteScore
        if (vote === 'upVote') {
            newVoteScore = voteScore + 1
        } else if (vote === 'downVote') {
            newVoteScore = voteScore - 1
        }
        this.props.votePost(id, vote, newVoteScore)
    }
    
    // Código copiado de: https://stackoverflow.com/questions/2130241/pass-correct-this-context-to-settimeout-callback/9298306
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    updatePost(event) {
        event.preventDefault()
        const id = this.props.post.id
        const title = this.state.title
        const body = this.state.body
        this.props.editPost(id, title, body)
        this.setState({ menssage: 'Alterações Salvas!!!' })
        this.sleep(1500).then(() => {
            this.setState({ menssage: '' })
        })
    }

    delete(event) {
        event.preventDefault()
        const id = this.props.post.id
        this.props.delePost(id)
        this.props.history.push('/')
    }

    render() {
        console.log(this.context)
        return (
            <div>
                <Row>
                    <Col offset='s1 m2 l2' s={10} m={8}>
                        <CardPanel>
                            <Button
                                href='/'
                                onClick={(event) => this.delete(event)}
                                floating
                                className='red'
                                waves='light'
                                icon='delete'
                                style={{ float: 'right', margin: '3px' }}
                            />
                            <Modal
                                header={`Editar Post: ${this.props.post.title}`}
                                trigger={
                                    <Button
                                        floating
                                        className='blue'
                                        waves='light'
                                        icon='mode_edit'
                                        style={{ float: 'right', margin: '3px' }}
                                    />}>
                                <label>Título do Post</label>
                                <Input
                                    onChange={(event) => this.setTitle(event.target.value)}
                                    defaultValue={this.state.title}
                                    s={12}
                                />
                                <label>Conteúdo do Post</label>
                                <textarea
                                    onChange={(event) => this.setBody(event.target.value)}
                                    value={this.state.body}
                                    id='textarea1'
                                    className='materialize-textarea'
                                ></textarea>
                                <Button
                                    onClick={(event) => this.updatePost(event)}
                                    floating
                                    className='green'
                                    waves='light'
                                    icon='done'
                                />
                                <p style={{color: 'green'}}>{this.state.menssage}</p>
                            </Modal>
                            <div className='btn-delet-post'>
                            </div>
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
                                <button
                                    onClick={() => this.vote(
                                        'upVote',
                                        this.props.post.voteScore,
                                        this.props.post.id
                                    )}
                                    className='icon-button'
                                >
                                    <Icon tiny>thumb_up</Icon>
                                </button>
                            </span>
                            <span>
                                <button
                                    onClick={() => this.vote(
                                        'downVote',
                                        this.props.post.voteScore,
                                        this.props.post.id
                                    )}
                                    className='icon-button'
                                >
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
        post: {
            ...posts[posts.postSelected]
        }
    }
}

export default connect(mapStateToProps, { votePost, editPost, delePost })(PostDetail)