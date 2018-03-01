export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'

export function addPost({ type, id, timestamp, title, body, author, category }){
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

export function votePost({ type, id, newScore }) {
  return {
    type: VOTE_POST,
    id,
    newScore
  }
}