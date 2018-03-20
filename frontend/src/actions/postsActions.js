import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_CATEGORY = 'FETCH_POSTS_CATEGORY'
export const FETCH_POST_BY_ID = 'SELECT_POST_BY_ID'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const COMMENT_COUNT = 'COMMENT_COUNT'
export const RESET_POST = 'RESET_POST'

const url = 'http://localhost:3001'
const headers = { 'Authorization': 'whatever-you-want' }

export function getAllPosts() {
  return dispatch => {
    axios.get(`${url}/posts`,{ headers })
      .then(res => dispatch(getAllPostAction(res.data)))
  }
}

export function getPostsByCategory(category) {
  return dispatch => {
    axios.get(`${url}/${category}/posts`, { headers })
      .then(res => dispatch(getPostsByCategoryAction(category, res.data)))
  }
}

export function getPostById(id) {
  return dispatch => {
    axios.get(`${url}/posts/${id}`, { headers })
      .then(res => dispatch(getPostByIdAction(res.data)))
  }
}

export function addPost(newPost) {
  return dispatch => {
    axios.post(
      `${url}/posts`,
      newPost,
      { headers }
    )
      .catch(err => console.log(err))
  }  
}

export function votePost(id, vote, newVoteScore) {
  return dispatch => {
    axios.post(
      `${url}/posts/${id}`,
      { option: vote } ,
      { headers }
    )
      .then(dispatch(votePostAction(id, newVoteScore)))}
}

export function editPost(id, title, body) {
  return dispatch => {
    axios.put(
      `${url}/posts/${id}`,
      { title: title, body: body },
      { headers }
    )
      .then(dispatch(editPostAction(id, title, body)))
  }
}

export function delePost(id) {
  return dispatch => {
    axios.delete(`${url}/posts/${id}`, { headers })
      .then(dispatch(deletePostAction(id)))
      .catch(err => console.lod(err))
  }
}

export function getAllPostAction(data) {
  return {
    type: FETCH_POSTS,
    payload: data
  }
}
export function getPostsByCategoryAction(category, data) {
  return {
    type: FETCH_POSTS_CATEGORY,
    category,
    payload: data
  }
}
export function getPostByIdAction(data) {
  return {
    type: FETCH_POST_BY_ID,
    payload: data
  }
}

export function addPostAction({ type, id, timestamp, title, body, author, category }){
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function votePostAction(id, newVoteScore) {
  return {
    type: VOTE_POST,
    id,
    newVoteScore
  }
}

export function editPostAction(id, title, body) {
  return {
    type: EDIT_POST,
    id,
    title,
    body
  }
}

export function deletePostAction (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function commentCountAction (id, newCommentCount) {
  return {
    type: COMMENT_COUNT,
    id,
    newCommentCount
  }
}

export function resetPostAction () {
  return {
    type: RESET_POST
  }
} 