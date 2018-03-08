import axios from 'axios'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const RESET_STORE = 'RESET_STORE'

const url = 'http://localhost:3001'
const headers = { 'Authorization': 'whatever-you-want' }

export function getAllComments (id) {
  return dispatch => {
    axios.get(
      `${url}/posts/${id}/comments`, 
      { headers }
    )      
      .then(res => dispatch(getAllCommentsAction(res.data)))
      .catch(err => console.log(err))
  }
}

export function addComment(comment) {
  return dispatch => {
    axios.post(
      `${url}/comments`,
      comment,
      { headers }
    )
  }
}

export function voteComment (id, vote, newVoteScore) {
  return dispatch => {
    axios.post(
      `${url}/comments/${id}`,
      { option: vote },
      {headers}
    )
      .then(dispatch(voteCommentAction(id, newVoteScore)))
  }
}

export function editComment (id, timestamp, body) {
  return dispatch => {
    axios.put(
      `${url}/comments/${id}`,
      { timestamp: timestamp, body: body },
      { headers }
    )
      .then(dispatch(editCommentAction(id, timestamp, body)))
  }
}

export function deleteComment (id) {
  return dispatch => {
    axios.delete(
      `${url}/comments/${id}`,
      { headers }
    )
      .then(dispatch(deleteCommentAction(id)))
  }
}

export function getAllCommentsAction(data) {
  return {
    type: FETCH_COMMENTS,
    payload: data
  }
}

export function voteCommentAction(id, newVoteScore) {
  return {
    type: VOTE_COMMENT,
    id,
    newVoteScore
  }
}

export function editCommentAction (id, timestamp, body) {
  return {
    type: EDIT_COMMENT,
    id,
    timestamp,
    body
  }
}

export function deleteCommentAction (id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function resetCommentsAction(){
  return{
    type: RESET_STORE
  } 
}