import _ from 'lodash'

import {
  FETCH_POSTS,
  FETCH_POSTS_CATEGORY,
  FETCH_POST_BY_ID,
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  COMMENT_COUNT,
  RESET_POST
} from '../actions/postsActions'


function posts(state = {}, action) {
  const {
    id,
    timestamp,
    title,
    body,
    author,
    category,
    newVoteScore,
    newCommentCount,
    payload
  } = action

  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(payload, 'id')

    case FETCH_POSTS_CATEGORY:
      return _.mapKeys(payload, 'id')

    case FETCH_POST_BY_ID: {
      return payload
    }

    case ADD_POST:
      return {
        ...state,
        [id]: {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore: 1,
          deleted: false,
          commentCount: 0
        }
      }

    case VOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: newVoteScore
        }
      }

    case EDIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          title: title,
          body: body
        }
      }

    case DELETE_POST:
      return _.omit(state, id)

    case COMMENT_COUNT:
      return {
        ...state,
        commentCount: newCommentCount
      }

    case RESET_POST:
      return {}

    default:
      return state
  }
}

export default posts