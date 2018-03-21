import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import {
  CardPanel,
  Icon,
  Row,
  Col,
  Button
} from 'react-materialize'
import sortBy from 'sort-by'

import {
  votePost,
  editPost,
  delePost,
  getAllPosts,
  getPostById
} from '../actions/postsActions'
import { getAllComments } from '../actions/commentsActions'

import NewComment from './NewComment'
import CommentDetail from './CommentDetail'
import PostEdit from './PostEdit'
import ErrorNotFound from './ErrorNotFound'

import { sleep } from '../utils/sleep'
import { voteHelper } from '../utils/voteHelper'
import { timestampToDate } from '../utils/timestampToDate'

class PostDetail extends Component {

  state = {
    title: '',
    body: '',
    showPost: true
  }

  componentWillMount() {
    const locationArray = window.location.href.split('/')
    const thePost = locationArray[4]
    this.props.getPostById(thePost)
    if ((this.props.post.id || thePost)) {
      this.props.getAllComments(thePost)
    }
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

  updateForm() {
    this.setState({
      title: this.props.post.title,
      body: this.props.post.body,
    })
  }

  vote(vote, voteScore, id) {
    let newVoteScore = voteHelper(vote, voteScore)
    this.props.votePost(id, vote, newVoteScore)
    this.props.getPostById(this.props.post.id)
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
        {(this.props.post.Post === 'NotFound') && <Redirect to='/notfound' />}
        {this.props.post.id && (
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
                <PostEdit post={this.props.post} postSelected={true} />
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
                <span style={{ fontSize: '0.8em' }}>
                  Score: {this.props.post.voteScore}
                </span><br />
                <span style={{ fontSize: '0.8em' }}>
                  Comentários: {this.props.post.commentCount}
                </span><br />
                <NewComment />
                {this.props.comments.sort(sortBy('-voteScore')).map((comment, key) => (
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
        )}
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }) {
  const ids = Object.keys(comments).map((key) => key)
  return {
    post: {
      ...posts
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
  getAllComments,
  getPostById
})(PostDetail)