import React, { Component } from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Row, Col, Button, Input, Dropdown, NavItem } from 'react-materialize'

import PostSummary from './PostSummary'
import NewPost from './NewPost'
import PostDetail from './PostDetail'
import AppGrid from './Layouts/AppGrid'
import AppNav from './AppNav'
import './App.css'

let posts = [
  {
    id: 1,
    categoria: 'react',
    titulo: 'React e a melhor ferramenta',
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    voteScore: 10
  },
  {
    id: 2,
    categoria: 'redux',
    titulo: 'Redux e a melhor ferramenta',
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    voteScore: 15
  },
  {
    id: 3,
    categoria: 'udacity',
    titulo: 'Udacity tem o melhor curso de React e Redux',
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    voteScore: 12
  }
]

class App extends Component {

  render() {
    return (
      <div>
        <AppNav />
        
        <div className='btn-new-post'>
          <Link to='/newpost' />
        </div>

        <Switch>
          <Route exact path={'/'} render={() => (
            posts.map((post, key) => (
              <PostSummary key={key} post={post} />
            ))
          )} />
          <Route exact path={'/react'} render={() => (
            posts.filter((post) => post.categoria === 'react')
              .map((post, key) => (
                <Row key={key}>
                  <Col offset='s1 m2 l2' s={10} m={8}>
                    <PostSummary post={post} />
                  </Col>
                </Row>
              ))
          )} />
          <Route path={`/react_1`} render={() => (
            <PostDetail />
          )} />

          <Route strict path={'/redux'} render={() => (
            posts.filter((post) => post.categoria === 'redux')
              .map((post, key) => (
                <Row key={key}>
                  <Col offset='s1 m2 l2' s={10} m={8}>
                    <PostSummary post={post} />
                  </Col>
                </Row>
              ))
          )} />

          <Route path={`/react_1`} render={() => (
            <PostDetail />
          )} />

          <Route strict path={'/udacity'} render={() => (
            posts.filter((post) => post.categoria === 'udacity')
              .map((post, key) => (
                <Row key={key}>
                  <Col offset='s1 m2 l2' s={10} m={8}>
                    <PostSummary post={post} />
                  </Col>
                </Row>
              ))
          )} />

          <Route path={`/react_1`} component={PostDetail} />

          <Route path={'/newpost'} component={NewPost}/>
        </Switch>
      </div>
    )
  }
}

export default App
