import React, { Component } from 'react'

class Navigation extends Component {

  render(){
    return(
      <nav className="navbar narvbar-dark dg-dark">
        <a href="" className="text-white">
        {this.props.title}
        </a>
        <span className="badge badge-pill badge-light ml-2">
          {this.props.ntareas}
        </span>
      </nav>
    );
  }
}

export default Navigation;
