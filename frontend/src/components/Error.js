import React from 'react'

function Error (props) {
  return(
    <div style={{width: '100%', height: '80%', textAlign: 'center', marginTop: '150px'}} >
      <div style={{color: 'white', fontSize:'50px'}} >Ops...</div>
      <div style={{color: 'white', fontSize:'20px'}} >Ocorreu um erro.</div>
      <div style={{color: 'white', fontSize:'20px'}} >Post não encontrado</div>
    </div>
  )
}

export default Error