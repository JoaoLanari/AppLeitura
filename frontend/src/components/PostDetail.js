import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CardPanel,
  Icon,
  Row,
  Col,
  Modal,
  Button,
  Input
} from 'react-materialize'

import { 
  votePost, 
  editPost, 
  delePost, 
  getAllPosts
} from '../actions/postsActions'
import { getAllComments } from '../actions/commentsActions'

import NewComment from './NewComment'
import CommentDetail from './CommentDetail'

import { sleep } from '../utils/sleep'
import { voteHelper } from '../utils/voteHelper'
import { timestampToDate } from '../utils/timestampToDate'

class PostDetail extends Component {

  state = {
    title: this.props.post.title,
    body: this.props.post.body
  }

  componentDidMount() {
    if (this.props.post.id) {
      this.props.getAllComments(this.props.post.id)
    }
  }

  setTitle(title) {
    this.setState({ title: title })
  }

  setBody(body) {
    this.setState({ body: body })
  }

  setMessage(){
    this.setState({ menssage: 'Alterações Salvas!!!' })
    sleep(1500).then(() => {
      this.setState({ menssage: '' })
    })
  }

  vote(vote, voteScore, id) {
    let newVoteScore = voteHelper(vote, voteScore)
    this.props.votePost(id, vote, newVoteScore)
  }

  updatePost(event) {
    event.preventDefault()
    const id = this.props.post.id
    const title = this.state.title
    const body = this.state.body

    this.props.editPost(id, title, body)
    this.setMessage()
  }

  delete(event) {
    event.preventDefault()
    const id = this.props.post.id
    this.props.delePost(id)
    this.props.getAllPosts()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Row>
          <Col offset='s1 m2 l2' s={10} m={8}>
            <CardPanel>
              <Button
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

                <p style={{ color: 'green' }}>{this.state.menssage}</p>
                <Button
                  floating
                  className='red modal-close'
                  waves='light'
                  icon='close'
                />
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
              <p>
                {timestampToDate(this.props.post.timestamp)}
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
              </span><br />
              <NewComment />
              {this.props.comments.map((comment, key) => (
                <div key={key}>
                  <CommentDetail
                    id={this.props.post.id}
                    commentCount={this.props.post.commentCount}
                    comment={comment}
                  />
                </div>
              ))}
            </CardPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }) {
  const ids = Object.keys(comments).map((key) => key)
  return {
    post: {
      ...posts[posts.postSelected]
    },
    comments: ids.map((key) => ({
      ...comments[key]
    }))
  }
}

export default connect(mapStateToProps, { 
  votePost, 
  editPost, 
  delePost, 
  getAllPosts, 
  getAllComments 
})(PostDetail)