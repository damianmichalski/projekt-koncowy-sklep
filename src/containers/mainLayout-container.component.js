import React, { Component } from "react";
import { Menu } from "../presentational/menu.component";
import { Footer } from "../presentational/footer.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MainLayout extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Menu
          active={this.props.active}
          sortParams={this.props.sortParams}
          cart={this.props.cart}
          inCart={this.props.inCart}
        />
        {this.props.children}
        <Footer active={this.props.active} sortParams={this.props.sortParams} />
      </div>
    );
  }
}

let mapStateToProps = function(store) {
  return {
    active: store.shopReducer.active,
    sortParams: store.shopReducer.sortParams,
    cart: store.shopReducer.cart,
    inCart: store.shopReducer.inCart
  };
};

export default withRouter(connect(mapStateToProps)(MainLayout));
