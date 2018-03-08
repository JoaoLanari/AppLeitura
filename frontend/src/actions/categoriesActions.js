import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

const url = 'http://localhost:3001'
const headers = { 'Authorization': 'whatever-you-want' }

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