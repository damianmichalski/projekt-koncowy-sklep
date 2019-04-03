import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../presentational/cart.component";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class CartContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  handleClickDelProduct = id => {
    return this.props.actions.defFromCart(id);
  };

  handleClickCartCounter = (id, value) => {
    return this.props.actions.productInCartCount(id, value);
  };

  handleClickUpdateMagazine = () => {
    return this.props.actions.updateProductsInMagazine();
  };

  render() {
    return (
      <Cart
        product={this.props.selectedProduct}
        cart={this.props.cart}
        inCart={this.props.inCart}
        clickDelProduct={this.handleClickDelProduct}
        clickCartCounter={this.handleClickCartCounter}
        clickUpdateMagazine={this.handleClickUpdateMagazine}
      />
    );
  }
}

let mapStateToProps = function(store) {
  return {
    selectedProduct: store.shopReducer.selectedProduct,
    cart: store.shopReducer.cart,
    inCart: store.shopReducer.inCart
  };
};

let mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartContainer)
);
