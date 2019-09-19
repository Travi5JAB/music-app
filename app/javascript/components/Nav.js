import React from "react"
import PropTypes from "prop-types"

class Nav extends React.Component {
  render () {
    return (

            <nav className = "nav">

               <a
                   className = "about"
                   href="/about">
                   About Us
               </a>

               <a
                   className = "learn"
                   href="/more">
                   Learn More
               </a>
               
               <a
                  className = "albums"
                  href= '/albums'>
                  Albums
               </a>

               <a
                  className = "home"
                  href="/">
                  Home
               </a>

             </nav>
       );
     }
   }

export default Nav
