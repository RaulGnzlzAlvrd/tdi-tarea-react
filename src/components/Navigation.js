import React, { Component } from 'react'

class Navigation extends Component {

  render(){
    return(
      <nav className="navbar narvbar-dark dg-dark mt-5">
        <a href="/" className="text-white">{this.props.title}</a>&nbsp;
        <span className="badge badge-pill badge-light">
          {this.props.ntareas}
        </span>
      </nav>
    );
  }

}

export default Navigation;
