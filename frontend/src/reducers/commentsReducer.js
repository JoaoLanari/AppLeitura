import _ from 'lodash'

import {
    FETCH_COMMENTS,
    VOTE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    RESET_STORE
} from '../actions/commentsActions'

function comments (state = {}, action) {

  const { 
    payload, 
    id, 
    newVoteScore, 
    timestamp, 
    body 
  } = action
  
  switch (action.type) {
    
    case FETCH_COMMENTS :
      return _.mapKeys(payload, 'id')
    
    case VOTE_COMMENT :
      return {
        ...state,
        [id]: {
          ...state[id],
            voteScore: newVoteScore
        }
      }
      
    case EDIT_COMMENT :
      return {
        ...state,
        [id]: {
          ...state[id],
            timestamp: timestamp,
            body: body
        }
      }

    case DELETE_COMMENT :
      return  _.omit(state, id)
    
    case RESET_STORE :
    return {}
  
    default:
      return state
  }
}

export default comments