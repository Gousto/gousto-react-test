
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {categoryActions} from './actions/categoryActions';
import {categorySelector} from './redux/menu'
import {selectedCategorySelector} from "./redux/selectedCategoryReducer";

export class Menu extends Component{

    constructor(props) {
        super(props);
    }

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
                {this.props.categories.data &&
                this.props.categories.data.map(category => (
                        <li key={category.id}><button style={category.id === this.props.selectedCategory ? {fontWeight: 'bold'} : null} onClick={() => this.setSelectedCategory(category.id)}>{category.title}</button></li>
                        )
                    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
