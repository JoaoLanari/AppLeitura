import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/index' 
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import PostSummary from './PostSummary'
import NewPost from './NewPost'
import PostDetail from './PostDetail'
import AppNav from './AppNav'
import './App.css'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <AppNav />
          <Switch>
            <Route exact path={'/'} render={() => (
              <PostSummary />
            )} />
            <Route path={'/newpost'} exact component={NewPost} />
            <Route path='/:category' exact component={props => (
              <PostSummary {...props} />)} 
            />
            <Route path='/:category/:id' exact component={props => (
              <PostDetail {...props} />)} 
            />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, { getCategories })(App)
