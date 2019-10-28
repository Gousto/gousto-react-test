
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {categoryActions} from './actions/categoryActions';
import {categorySelector} from './redux/menu'
import {selectedCategorySelector} from "./redux/selectedCategoryReducer";
import {productActions} from "./actions/productActions";
import {productByCategorySelector, productsByCategoryAndSearchTerm, productSelector} from "./redux/productReducer";
import {Product} from "./Product";

class ProductContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            expandedProducts: [],
            searchInputText: ''
        }
    }

    updateSearchInputText = (newText) => {
        this.setState({
            ...this.state,
            searchInputText: newText
        })
    };

    onSearchClick = () => {
        this.props.setProductSearchTerm(this.state.searchInputText)
    };

    toggleExpanded = (id) => {
        let newExpandedProducts = this.state.expandedProducts;
        const index = newExpandedProducts.indexOf(id);
        index !== -1 ? newExpandedProducts.splice(index, 1) : newExpandedProducts.push(id);
        this.setState({
            ...this.state,
            expandedProducts: newExpandedProducts
        });
    };

    componentDidMount() {
        this.props.fetchProducts();
    }

    render(){
        return (
            <div>
                <h1 className="title">Products</h1>
                <input value={this.state.searchInputText} type={"text"} onChange={(e) => this.updateSearchInputText(e.target.value)}/>
                <button onClick={() => this.onSearchClick()}>Search</button>
                {this.props.products.data ?
                this.props.products.data.map(product =>
                    <Product product={product}
                             onClick={() => this.toggleExpanded(product.id)}
                             expanded={this.state.expandedProducts.includes(product.id)}
                    />

                ) : <div>Loading Products</div>}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    products: productsByCategoryAndSearchTerm(state),
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(productActions.fetchProducts()),
    setProductSearchTerm: (text) => dispatch(productActions.setProductSearchTerm(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)