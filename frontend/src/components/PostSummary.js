import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  CardPanel,
  Dropdown,
  Button,
  NavItem,
  Icon
} from 'react-materialize'
import sortBy from 'sort-by'


import { getPostByIdAction, votePost, delePost, editPost } from '../actions/postsActions'
import { getAllComments } from '../actions/commentsActions'

import PostEdit from './PostEdit'

import { voteHelper } from '../utils/voteHelper'

class PostSummary extends Component {
 
  state= {
    filterName: 'Score',
    filter: '-voteScore'
  }

  setFiter(event, filterName, filter) {
    event.preventDefault()
    this.setState({ filterName: filterName })
    this.setState({ filter: filter })
  }

  vote(vote, voteScore, id) {
    let newVoteScore = voteHelper(vote, voteScore)
    this.props.votePost(id, vote, newVoteScore)
  }

  getPost(id) {
    this.props.getPostByIdAction(id)
    this.props.getAllComments(id)
  }

  delete(event, id) {
    event.preventDefault()
    this.props.delePost(id)
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <Row className='nav-filter'>
          <Col offset='s1 m2 l2' s={10} m={8}>
            <span><b>Ordenar por:</b></span>
            <Dropdown trigger={
              <Button>{this.state.filterName}</Button>
            }>
              <NavItem onClick={(event) => this.setFiter(event, 'Score', '-voteScore')}>Score</NavItem>
              <NavItem onClick={(event) => this.setFiter(event, 'Data', '-timestamp')}>Data de Publicação</NavItem>
            </Dropdown>
          </Col>
          <Col s={1} m={2} />
        </Row>
        {posts.sort(sortBy(this.state.filter)).map((post, key) => (
          <Row key={key}>
            <Col offset='s1 m2 l2' s={10} m={8}>
              <CardPanel>
              <Button
                onClick={(event) => this.delete(event, post.id)}
                floating
                className='red'
                waves='light'
                icon='delete'
                style={{ float: 'right', margin: '3px' }}
              />
              <PostEdit post={post} />
              <div className='btn-delet-post'>
              </div>
                <Link
                  onClick={() => this.getPost(post.id)}
                  to={`/${post.category}/${post.id}`}
                  className='post-header'
                >
                  <h5>{post.title}</h5>
                </Link>
                <p>{post.author}</p>
                <span>
                  <button
                    onClick={() => this.vote('upVote', post.voteScore, post.id)}
                    className='icon-button'
                  >
                    <Icon tiny>thumb_up</Icon>
                  </button>
                </span>
                <span>
                  <button onClick={() => this.vote('downVote', post.voteScore, post.id)} className='icon-button'>
                    <Icon tiny>thumb_down</Icon>
                  </button>
                </span><br />
                <span style={{ fontSize: '0.8em' }}>Score: {post.voteScore}</span><br />
                <span style={{ fontSize: '0.8em' }}>
                  Comentários: {post.commentCount}
                </span>
              </CardPanel>
            </Col>
          </Row>
        ))}
        <div className='btn-new-post'>
          <Link to='/newpost' />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  const ids = Object.keys(posts).map((key) => key)
  return {
    selectedCategory: categories.selectedCategory,
    posts: ids.map((key) => ({
      ...posts[key]
    }))
  }
}

export default connect(mapStateToProps, {
  getPostByIdAction,
  votePost,
  getAllComments,
  delePost,
  editPost
})(PostSummary)