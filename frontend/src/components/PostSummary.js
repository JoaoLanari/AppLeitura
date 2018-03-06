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

import { getAllPosts, getPostsByCategory, getPostByIdAction, votePost, getAllComments } from '../actions/index'

class PostSummary extends Component {

    vote(vote, voteScore, id) {
        let newVoteScore
        if(vote === 'upVote') {
            newVoteScore = voteScore + 1
        } else  if(vote === 'downVote') {
            newVoteScore = voteScore - 1
        }
        this.props.votePost(id, vote, newVoteScore)
    }
    
    getPost(id) {
        this.props.getPostByIdAction(id)
        this.props.getAllComments(id)
    }

    render() {

        return (
            <div>
                <Row className='nav-filter'>
                    <Col offset='s1 m2 l2' s={10} m={8}>
                        <span><b>Ordenar por:</b></span>
                        <Dropdown trigger={
                            <Button>Drop me!</Button>
                        }>
                            <NavItem onClick={() => console.log('opa')}>Score</NavItem>
                            <NavItem>Data de Publicação</NavItem>
                        </Dropdown>
                    </Col>
                    <Col s={1} m={2} />
                </Row>
                {this.props.posts.map((post, key) => (
                    <Row key={key}>
                        <Col offset='s1 m2 l2' s={10} m={8}>
                            <CardPanel>
                                <Link
                                    onClick={() => this.getPost(post.id)}
                                    to={`/${post.category}/${post.id}`}
                                    className='post-header'
                                >
                                    <h5>{post.title}</h5>
                                </Link>
                                <p>{post.body}</p>
                                <span>
                                    <button 
                                        onClick={() => this.vote('upVote', post.voteScore, post.id)} 
                                        className='icon-button'
                                    >
                                        <Icon tiny>thumb_up</Icon>
                                    </button>
                                </span>
                                <span>
                                    <button onClick={() => this.vote('downVote', post.voteScore, post.id)}  className='icon-button'>
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
    getAllPosts,
    getPostsByCategory,
    getPostByIdAction,
    votePost,
    getAllComments
})(PostSummary)