import _ from 'lodash'
import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_CATEGORY = 'FETCH_POSTS_CATEGORY'
export const FETCH_POST_BY_ID = 'SELECT_POST_BY_ID'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'

const url = 'http://localhost:3001'
const headers = { 'Authorization': 'whatever-you-want' }

//Posts Actions
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
export function getPostByIdAction(id) {
  return {
    type: FETCH_POST_BY_ID,
    id
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

// Category Actions
export function getCategories() {
  return dispatch => {
    axios.get(`${url}/categories`, { headers })
      .then(res => dispatch(getCategoriesAction(res.data)))
  }
}

export function getCategoriesAction(data) {
  return {
    type: GET_CATEGORIES,
    payload: data
  }
}

export function selectCategoryAction (category) {
  return {
    type: SELECT_CATEGORY,
    category
  }
}

//Comments Action

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