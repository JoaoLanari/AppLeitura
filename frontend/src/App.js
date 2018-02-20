import React, { Component } from 'react'
import { Navbar, NavItem, Row, Col, Button } from 'react-materialize'

import Post from './Post'
import './App.css'

let posts = [
  {
    titulo: 'React e a melhor ferramenta',
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    voteScore: 10
  },
  {
    titulo: 'Redux e a melhor ferramenta',
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    voteScore: 15
  },
  {
    titulo: 'Udacity tem o melhor curso de React e Redux',
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
    voteScore: 12
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className='navbar-leitura' brand='Aplicativo Leitura' right>
          <NavItem>React</NavItem>
          <NavItem>Redux</NavItem>
          <NavItem>Udacity</NavItem>
        </Navbar>
        <section>
          {posts.map((post, key) => (            
            <Row key={key}>
              <Col offset='s1 m2 l2' s={10} m={8}>
                <Post post={post}/>
              </Col>
            </Row>
          ))}
        </section>
                
        <Button 
          floating fab='horizontal' 
          waves='light' 
          icon='mode_edit' 
          className='btn_new_post' 
          large style={{bottom: '45px', right: '24px'}}
        ></Button>
      </div>
    )
  }
}

export default App
