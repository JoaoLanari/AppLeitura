import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, addPost } from '../actions/index'
import {
    Row,
    Col,
    Input,
    Button
} from 'react-materialize'

import { makeid } from '../utils/random'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            author: '',
            category: ''
        }
    }

    setTitle(title) {
        this.setState({ title: title })
    }

    setAuthor(author) {
        this.setState({ author: author })
    }

    setBody(body) {
        this.setState({ body: body })
    }

    setCategory(category){
        this.setState({ category: category })
    }

    onSubmitPost(event){
        event.preventDefault()
        const id = makeid()
        const timestamp = new Date().getTime()
        const title = this.state.title
        const body = this.state.body
        const author = this.state.author
        const category = this.state.category
        const newPost = {id, timestamp, title, body, author, category}
        this.props.addPost(newPost)
        this.props.getAllPosts()
        this.props.history.push('/')
    }

    render() {
        return (
            <div style={{ background: '#FFFFFF', marginLeft: '17.5%', marginRight: '17.5%' }}>
                <Row>
                    <Input
                        onChange={(event) => this.setTitle(event.target.value)}
                        value={this.state.title}
                        s={12}
                        label='Titulo do Post'
                    />
                </Row>
                <Row>
                    <Input
                        onChange={(event) => this.setAuthor(event.target.value)}
                        value={this.state.author}
                        s={12}
                        label='Autor'
                    />
                </Row>
                <Row>
                    <Input
                        onChange={(event) => this.setCategory(event.target.value)}
                        value={this.state.category} 
                        s={12} 
                        type='select'
                    >
                        <option value='none'>Escolha a categoria...</option>
                        <option value='react'>React</option>
                        <option value='redux'>Redux</option>
                        <option value='udacity'>Udacity</option>
                    </Input>
                </Row>
                <Row>
                    <Col s={12}>
                        <label>Conteúdo do Post</label>
                        <textarea
                            onChange={(event) => this.setBody(event.target.value)}
                            value={this.state.body}
                            id='textarea1'
                            className='materialize-textarea'
                        ></textarea>
                    </Col>
                </Row>
                <Button onClick={(event) => this.onSubmitPost(event)}>Enviar</Button>
            </div>
        )
    }
}


export default connect(null, { getAllPosts, addPost })(NewPost)