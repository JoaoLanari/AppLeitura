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

class PostSummary extends Component {
    render() {
        console.log(this.props)
        /*
        let showingPosts = []
        if(this.props.location){
            switch (this.props.location.pathname) {
                case '/react':
                    this.props.posts.filter(post => post.categoria === 'react')
                        .map(post => showingPosts.push(post))
                    break;
                case '/redux':
                    this.props.posts.filter(post => post.categoria === 'redux')
                        .map(post => showingPosts.push(post))
                    break;
                case '/udacity':
                    this.props.posts.filter(post => post.categoria === 'udacity')
                        .map(post => showingPosts.push(post))
                    break;            
                default:
                    break;
            }
        } else {
            showingPosts = this.props.posts
        }
        */
        return (
            <div>
                {/*<Row className='nav-filter'>
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
                {showingPosts.map((post, key) => (
                    <Row key={key}>
                        <Col offset='s1 m2 l2' s={10} m={8}>
                            <CardPanel>
                                <Link 
                                    to={`/${post.categoria}/${post.id}`} 
                                    className='post-header'
                                >
                                    <h5>{post.titulo}</h5>
                                </Link>
                                <p>{post.conteudo}</p>
                                <span style={{ fontSize: '0.8em' }}>Score: {post.voteScore}</span><br />
                                <span style={{ fontSize: '0.8em' }}>
                                    Comentários: 10
                            </span>
                            </CardPanel>
                        </Col>
                    </Row>
                ))}
                <div className='btn-new-post'>
                    <Link to='/newpost' />
            </div>*/}
            </div>
        )
    }
}

function mapStateToProps ({ posts }) {
    return { posts: posts }
}

export default connect(mapStateToProps)(PostSummary)