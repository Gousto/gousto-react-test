
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {categoryActions} from './actions/categoryActions';
import {categorySelector} from './redux/categoryReducer'
import {selectedCategorySelector} from "./redux/selectedCategoryReducer";

export class UnconnectedMenu extends Component{

    componentDidMount() {
        this.props.fetchCategories();
    }

    setSelectedCategory(id){
        this.props.setSelectedCategory(id);
    }

    render(){
          return (
            <div>
              <h1 className="title">Menu</h1>
                {this.props.categories && this.props.categories.data ?
                this.props.categories.data.map(category => (
                        <li key={category.id}
                        data-test={`menu-list-item-${category.id}`}>
                            <button
                                data-test={`menu-list-item-button-${category.id}`}
                                style={category.id === this.props.selectedCategory ? {fontWeight: 'bold'} : null}
                                onClick={() => this.setSelectedCategory(category.id)}
                            >
                                {category.title}
                            </button>
                        </li>
                        )
                ) : <div>Loading Categories</div>
                }
            </div>
          )
    }
};

const mapStateToProps = state => ({
    categories: categorySelector(state),
    selectedCategory: selectedCategorySelector(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(categoryActions.fetchCategories()),
    setSelectedCategory: (id) => dispatch(categoryActions.setSelectedCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedMenu)
