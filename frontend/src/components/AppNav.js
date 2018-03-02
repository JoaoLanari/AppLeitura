import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories, selectCategoryAction } from '../actions/index' 
import { Link } from 'react-router-dom'

class AppNav extends Component {

  componentWillMount(){
    this.props.getCategories()
  }

  selectCategory(category) {
    this.props.selectCategoryAction(category)
  }

  render() {

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
          {this.props.categories && (
            this.props.categories.categories.map((category, key) => (
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

export default connect(mapStateToProps, { getCategories, selectCategoryAction })(AppNav)