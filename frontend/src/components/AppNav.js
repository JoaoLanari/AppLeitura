import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AppNav extends Component {

  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Aplicativo Leitura</Link>
        </nav>
        <div className='btn-nav-group'>
          <Link to='/react' style={{ width: '100px' }}><b>React</b> | </Link>
          <Link to='/redux'><b>Redux</b> | </Link>
          <Link to='/udacity'><b>Udaity</b></Link>
        </div>
      </div>
    )
  }
}

export default AppNav