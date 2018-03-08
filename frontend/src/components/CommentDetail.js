import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Modal } from 'react-materialize'

import { commentCountAction } from '../actions/postsActions'
import { voteComment, editComment, deleteComment } from '../actions/commentsActions'

import { timestampToDate } from '../utils/timestampToDate'
import { voteHelper } from '../utils/voteHelper'
import { sleep } from '../utils/sleep'

class CommentDetail extends Component {

  state = {
    body: this.props.comment.body,
    menssage: ''
  }

  componentDidMount() {
    console.log(this.props.comment.body)
  }

  setBody(body) {
    this.setState({ body: body })
  }

  setMessage() {
    this.setState({ menssage: 'Alterações Salvas!!!' })
    sleep(1500).then(() => {
      this.setState({ menssage: '' })
    })
  }

  vote(vote, voteScore, id) {
    let newVoteScore = voteHelper(vote, voteScore)
    this.props.voteComment(id, vote, newVoteScore)
  } 

  updateComment(event) {
    event.preventDefault()

    const id = this.props.comment.id
    const body = this.state.body
    const timestamp = new Date().getTime()

    this.props.editComment(id, timestamp, body)    
    this.setMessage()
  }
  
  delete(event) {
    event.preventDefault()

    const newCommentCount = this.props.commentCount - 1
    
    this.props.commentCountAction(this.props.id, newCommentCount)
    this.props.deleteComment(this.props.comment.id)

  }

  render() {
    const { comment } = this.props
    return (
      <div>
        <hr />
        <h6><b>Comentário</b></h6>
        <p>Autor: {comment.author}</p>
        <p>Comentário: {comment.body}</p>
        <p>Data: {timestampToDate(comment.timestamp)}</p>
        <span>
          <button
            onClick={() => this.vote(
              'upVote',
              comment.voteScore,
              comment.id
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
              comment.voteScore,
              comment.id
            )}
            className='icon-button'
          >
            <Icon tiny>thumb_down</Icon>
          </button>
          <p>Score: {comment.voteScore}</p>
        </span>
        {this.props.comment.body &&(
          <Modal
            header='Editar Comentário'
            trigger={
              <Button
                floating
                className='blue'
                waves='light'
                icon='mode_edit'
                style={{ margin: '3px', width: '40px', height: '40px', fontSize: '1px' }}
              />}>
            <label>Conteúdo do Comentário</label>
            <textarea
              onChange={(event) => this.setBody(event.target.value)}
              defaultValue={this.state.body}
              id='textarea1'
              className='materialize-textarea'
            ></textarea>
            <Button
              onClick={(event) => this.updateComment(event)}
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
        )}
        <Button
          onClick={(event) => this.delete(event)}
          floating
          className='red'
          waves='light'
          icon='delete'
          style={{ margin: '3px', width: '40px', height: '40px', fontSize: '1px' }}
        />
      </div>
    )
  }
}

export default connect(null, {
  voteComment,
  editComment,
  deleteComment,
  commentCountAction
})(CommentDetail)