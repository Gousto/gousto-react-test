
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {categoryActions} from './actions/categoryActions';
import {categorySelector} from './redux/menu'

export class Menu extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategories();
        alert('hi');
    }

    render(){
        this.props.categories.data && alert('GOTIT');
          return (
            <div>
              <h1 className="title">Menu</h1>
            </div>
          )
    }
};

const mapStateToProps = state => ({
    categories: categorySelector(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(categoryActions.fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
