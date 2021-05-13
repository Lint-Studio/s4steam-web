import React, { Component } from "react";
import { List, X } from "react-bootstrap-icons";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggler: false,
    };

    this.handleMenuOnClick = this.handleMenuOnClick.bind(this);
  }

  handleMenuOnClick = () => {
    this.setState({
      menuToggler: !this.state.menuToggler,
    });
    console.log(this.state.menuToggler);
  };

  render() {
    return (
      <div>
        <div className="mobile-nav-wrapper">
          <p className="brand-format">S4STEAM</p>
          <div
            className="icon-wrapper-format "
            onClick={this.handleMenuOnClick}
          >
            {this.state.menuToggler ? (
              <X className="icon-format" />
            ) : (
              <List className="icon-format" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MyNavbar;
