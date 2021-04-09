import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/"><h2>Stand Blog<em>.</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/" class= "nav-link">Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li> 
              <li class="nav-item">
                <Link to="/About" class= "nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/Blog" class= "nav-link">Blog Entires</Link>
              </li>
              <li class="nav-item">
                <Link to="/Details" class= "nav-link">Post Details</Link>
              </li>
              <li class="nav-item">
                <Link to="/Contact" class= "nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
            </div>
        )
    }
}
export default Header;