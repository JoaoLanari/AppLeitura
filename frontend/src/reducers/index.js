import _ from 'lodash'
import { combineReducers } from 'redux'

import {
    FETCH_POSTS,
    FETCH_POSTS_CATEGORY,
    ADD_POST,
    VOTE_POST,
    GET_CATEGORIES,
    SELECT_CATEGORY
} from '../actions/index'


function posts (state = {}, action) {
  const { id, timestamp, title, body, author, category, newScore, payload } = action

  switch (action.type) {    
    case FETCH_POSTS : 
      return _.mapKeys(payload, 'id')
      
    case FETCH_POSTS_CATEGORY : 
      return _.mapKeys(payload, 'id')

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
        categories,
        selectedCategory: 'all'
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