import React from 'react'
import { Row, Col, Input } from 'react-materialize'

const NewPost = function (props) {
    return (
        <div style={{background: '#FFFFFF', marginLeft: '17.5%', marginRight: '17.5%'}}>
            <Row>
                <Input s={12} label='Nome' />
            </Row>
            <Row>
                <Input s={12} type='select' defaultValue='1'>
                    <option value='1'>Escolha a categoria...</option>
                    <option value='2'>React</option>
                    <option value='3'>Redux</option>
                    <option value='4'>Udacity</option>
                </Input>
            </Row>

            <Row>
                <Input  s={12} label='Título do Post' validate />
            </Row>
            <Row>
                <Col s={12}>
                    <label>Conteúdo do Post</label>
                    <textarea id='textarea1' className='materialize-textarea'></textarea>
                </Col>                                
            </Row>
        </div>
    )
}

export default NewPost