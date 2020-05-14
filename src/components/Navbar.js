import React, { Component } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
//import { AuthContext } from "../Auth.js";
//import { useContext } from "react";
export default class Navbar extends Component {
  render() {
  //const {currentUser} = useContext(AuthContext);

  return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            
            <Link to="/" className="nav-link">
              <h3>Products</h3>
            </Link>
            </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer cart>
            
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    
        
        
        

          
    
) 
  } }


const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

//const ButtonnContainer = styled.button`
  //text-transform: capitalize;
  //font - size: 1.4rem;
  //background: transparent;
  //border: 0.05rem solid var(--lightBlue);
  //border - radius: 0.5rem;
  //padding: 0.2rem 0.5rem;
  //outline - color: red;
  //cursor: pointer;
  //display: inline - block;
 // margin: 0.2rem 0.5rem 0.2rem 0;
  //transition: all 0.5s ease -in -out;
    //&: hover {
    //background: var(--lightBlue);
    //color: var(--mainWhite);
// // }
//`;
