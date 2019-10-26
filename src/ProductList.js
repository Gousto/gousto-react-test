
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {categoryActions} from './actions/categoryActions';
import {categorySelector} from './redux/menu'
import {selectedCategorySelector} from "./redux/selectedCategoryReducer";
import {productActions} from "./actions/productActions";
import {productSelector} from "./redux/productReducer";

class ProductList extends Component{

    componentDidMount() {
        this.props.fetchProducts();
    }

    render(){
        return (
            <div>
                <h1 className="title">Products</h1>
                {this.props.products.data ?
                    this.props.products.data.map(product => (
                            <li key={product.id}><button>{product.title}</button></li>
                        )
                    ) : <div>Loading Products</div>}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    products: productSelector(state),
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(productActions.fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)