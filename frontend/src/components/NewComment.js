import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Input } from 'react-materialize'

import { commentCountAction } from '../actions/postsActions' 
import { addComment, getAllComments } from '../actions/commentsActions'

import { makeid } from '../utils/random'

class NewComment extends Component {
  state = {
    author: '',
    body: '',
    menssage: ''
  }

  setAuthor(author) {
    this.setState({ author: author })
  }

  setBody(body) {
    this.setState({ body: body })
  }
  newComment(event) {
    event.preventDefault()
    
    const id = makeid()
    const timestamp = new Date().getTime()
    const author = this.state.author
    const body = this.state.body
    const parentId = this.props.post.id
    const newCommentsCount = this.props.post.commentCount + 1
    
    const newComment = { id, timestamp, body, author, parentId }
    
    this.props.addComment(newComment)
    this.props.commentCountAction(parentId, newCommentsCount)
    this.props.getAllComments(parentId)
  }

  render() {
    return (
      <Modal
        header={`Comentar Post: ${this.props.post.title}`}
        trigger={
          <Button
            floating
            className='green'
            waves='light'
            icon='comment'
            style={{ margin: '3px' }}
          />}>
        <Input
          onChange={(event) => this.setAuthor(event.target.value)}
          placeholder='Nome'
          defaultValue={this.state.title}
          s={12}
        />
        <label>Conteúdo do Comentario</label>
        <textarea
          onChange={(event) => this.setBody(event.target.value)}
          value={this.state.body}
          id='textarea1'
          className='materialize-textarea'
        ></textarea>
        <Button
          onClick={(event) => this.newComment(event)}
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
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    post: {
      ...posts
    }
  }
}

export default connect(mapStateToProps, { 
  addComment, 
  getAllComments, 
  commentCountAction 
})(NewComment)