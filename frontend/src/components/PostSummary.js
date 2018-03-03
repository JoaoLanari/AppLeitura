import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Row,
    Col,
    CardPanel,
    Dropdown,
    Button,
    NavItem
} from 'react-materialize'

import { getAllPosts, getPostsByCategory, getPostById } from '../actions/index'

class PostSummary extends Component {

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
                                    onClick={() => this.props.getPostById(post.id)}
                                    to={`/${post.category}/${post.id}`} 
                                    className='post-header'
                                >
                                    <h5>{post.title}</h5>
                                </Link>
                                <p>{post.body}</p>
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
    getPostById 
})(PostSummary)