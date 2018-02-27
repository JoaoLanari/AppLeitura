import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import PostSummary from './PostSummary'
import NewPost from './NewPost'
import PostDetail from './PostDetail'
import AppNav from './AppNav'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          id: '1',
          categoria: 'react',
          autor: 'Annita',
          titulo: 'React e a melhor ferramenta',
          conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
          voteScore: 10
        },
        {
          id: '2',
          categoria: 'redux',
          autor: 'Fábio de Melo',
          titulo: 'Redux e a melhor ferramenta',
          conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
          voteScore: 15
        },
        {
          id: '3',
          categoria: 'udacity',
          autor: 'Ana Maria Braga',
          titulo: 'Udacity tem o melhor curso de React e Redux',
          conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
          voteScore: 12
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <AppNav />
        <Switch>
          <Route exact path={'/'} render={() => (
            <PostSummary posts={this.state.posts} />
          )} />
          <Route path={'/newpost'} exact component={NewPost} />
          <Route path='/:category' exact component={props => (
            <PostSummary {...props} posts={this.state.posts}/>)} 
          />
          <Route path='/:category/:id' exact component={props => (
            <PostDetail {...props} posts={this.state.posts} />)} 
          />
        </Switch>
      </div>
    )
  }
}

export default App
