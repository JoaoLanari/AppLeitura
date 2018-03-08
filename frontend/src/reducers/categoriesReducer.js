import {
    GET_CATEGORIES,
    SELECT_CATEGORY
} from '../actions/categoriesActions'

function categories (state = {}, action) {
  const { category, payload } = action

  switch (action.type) {

    case GET_CATEGORIES :
      const categories = payload
      return {
        ...state,
        categories
      }

    case SELECT_CATEGORY :
      return {
        ...state,
        selectedCategory: category
      }
  
    default:
      return state
  }
}

export default categories