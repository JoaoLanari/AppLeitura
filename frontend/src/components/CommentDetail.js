import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Input, Button, Modal } from 'react-materialize'

import { voteComment } from '../actions/index'

class CommentDetail extends Component {

  state = {
    body: '',
    menssage: ''
  }
  
  setBody(body) {
    this.setState({ body: body })
  }

  timestampToDate(timestamp) {
    const date = new Date(timestamp);
    return date.toDateString()
  }

  vote(vote, voteScore, id) {
    let newVoteScore
    if (vote === 'upVote') {
      newVoteScore = voteScore + 1
    } else if (vote === 'downVote') {
      newVoteScore = voteScore - 1
    }
    this.props.voteComment(id, vote, newVoteScore)
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  updateComment(event) {
    event.preventDefault()
    const id = this.props.comment.id
    const body = this.state.body
    //this.props.editComment(id, title, body)
    this.setState({ menssage: 'Alterações Salvas!!!' })
    this.sleep(1500).then(() => {
      this.setState({ menssage: '' })
    })
  }

  render() {
    console.log(this.props)
    const { comment } = this.props
    return (
      <div>
        <hr />
        <h6><b>Comentário</b></h6>
        <p>Autor: {comment.author}</p>
        <p>Comentário: {comment.body}</p>
        <p>Data: {this.timestampToDate(comment.timestamp)}</p>
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
            value={this.state.body}
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
        <Button
          //onClick={(event) => this.delete(event)}
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

export default connect(null, { voteComment })(CommentDetail)