import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllPosts, getPostsByCategory, resetPostAction } from '../actions/postsActions'
import { getCategories, selectCategoryAction } from '../actions/categoriesActions'
import { resetCommentsAction } from '../actions/commentsActions'

class AppNav extends Component {

  componentWillMount() {
    this.props.resetPostAction()
    this.props.getAllPosts()
    this.props.getCategories()
  }

  selectCategory(category) {
    this.props.resetPostAction()
    this.props.resetCommentsAction()   
    if (category === 'all'){
      this.props.selectCategoryAction(category)
      this.props.getAllPosts()
    } else {
      this.props.selectCategoryAction(category)
      this.props.getPostsByCategory(category)
    }
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <nav>
          <Link 
            to='/'
            onClick={() => this.selectCategory('all')}
          >
            Aplicativo Leitura
          </Link>
        </nav>
        <div className='btn-nav-group'>
          {categories && (
            categories.categories.map((category, key) => (
              <Link
              key={key}
              onClick={() => this.selectCategory(category.name)} 
              to={`/${category.path}`}
              style={{margin: '10px'}}
            >
              <b>{category.name.toUpperCase()}</b>
            </Link>
            ))
          )}
           
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {  
  return {
    categories: categories.categories,
    selectedCategory: categories.selectedCategory
  }
}

export default connect(mapStateToProps, { 
  getCategories, 
  selectCategoryAction, 
  getAllPosts, 
  getPostsByCategory,
  resetCommentsAction,
  resetPostAction
})(AppNav)