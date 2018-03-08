import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  
  Button,
  Modal,
  Input
} from 'react-materialize'

import { editPost } from '../actions/postsActions'

import { voteHelper } from '../utils/voteHelper'
import { sleep } from '../utils/sleep'

class PostSummary extends Component {

  state = {
    title: this.props.post.title,
    body: this.props.post.body,
    message: ''
  }

  setTitle(title) {
    this.setState({ title: title })
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

  updatePost(event, id) {
    event.preventDefault()

    const title = this.state.title
    const body = this.state.body

    this.props.editPost(id, title, body)
    this.setMessage()
  }

  render() {
    return (
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
          defaultValue={this.props.post.title}
          s={12}
        />
        <label>Conteúdo do Post</label>
        <textarea
          onChange={(event) => this.setBody(event.target.value)}
          defaultValue={this.props.post.body}
          id='textarea1'
          className='materialize-textarea'
        ></textarea>
        <Button
          onClick={(event) => this.updatePost(event, this.props.post.id)}
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


export default connect(null, { editPost })(PostSummary)