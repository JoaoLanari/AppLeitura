import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import PostSummary from './PostSummary'
import NewPost from './NewPost'
import PostDetail from './PostDetail'
import AppNav from './AppNav'
import ErrorNotFound from './ErrorNotFound'
import './App.css'

function App (props) {
  return(
    <BrowserRouter>
        <div>
          <AppNav />
          <Switch>            
            <Route exact path={'/'} render={() => (
              <PostSummary />
            )} />
            <Route path={'/newpost'} exact component={NewPost} />
            <Route path='/:category(react|redux|udacity)' exact component={props => (
              <PostSummary {...props} />)} 
            />
            <Route path='/:category/:id' exact component={props => (
              <PostDetail {...props} />)} 
            />
            <Route component={ErrorNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default App
