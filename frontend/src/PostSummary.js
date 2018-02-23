import React, { Component } from 'react'
import {
    Link,
    Route
} from 'react-router-dom'
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
        let { posts } = this.props
        console.log(posts)
        const url = `/react_1`
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
                {posts.map((post, key) => (
                    <Row key={key}>
                        <Col offset='s1 m2 l2' s={10} m={8}>
                            <CardPanel>
                                <Link to={url} className='post-header'><h5>{post.titulo}</h5></Link>
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
                </div>
            </div>
        )
    }
}



export default PostSummary