import _ from 'lodash'
import { combineReducers } from 'redux'

import {
    FETCH_POSTS,
    FETCH_POSTS_CATEGORY,
    FETCH_POST_BY_ID,
    ADD_POST,
    VOTE_POST,
    EDIT_POST,
    DELETE_POST,
    GET_CATEGORIES,
    SELECT_CATEGORY
} from '../actions/index'


function posts (state = {}, action) {
  const { id, timestamp, title, body, author, category, newVoteScore, payload } = action

  switch (action.type) {    
    case FETCH_POSTS : 
      return _.mapKeys(payload, 'id')
      
    case FETCH_POSTS_CATEGORY : 
      return _.mapKeys(payload, 'id')
    
    case FETCH_POST_BY_ID : {
      return {
        ...state,
        postSelected: id
      }
    }

    case ADD_POST :
      return {
        ...state,
        [id]: {
          id,
          timestamp,
          title,
          body,
          author,
          category,
          voteScore: 0,
          deleted: false,
          commentCount: 0
        }       
      }
    
    case VOTE_POST :
      return {
        ...state,
        [id] :{
          ...state[id],
            voteScore: newVoteScore
        }
      }

    case EDIT_POST :
      return {
        ...state,
        [id]: {
          ...state[id],
            title: title,
            body: body
        }
      }
    
    case DELETE_POST :
      return _.omit(state, id)    

    default :
      return state
  }
}

function categories (state = {}, action) {
  const { category, payload } = action

  switch (action.type) {

    case GET_CATEGORIES :
      const categories = payload
      return {
        ...state,
        categories
      }  
      break

    case SELECT_CATEGORY :
      return {
        ...state,
        selectedCategory: category
      }
      break
  
    default:
      return state
      break
  }
}

export default combineReducers ({
  posts,
  categories
})