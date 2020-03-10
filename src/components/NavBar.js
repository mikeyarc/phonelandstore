
import React , {Component} from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';



export default class NavBar extends Component {
    render(){
     return (
       
         <NavWrapper className ="navbar navbar-expand-sm  navbar-dark px-sm-5">
                 {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */ }
        <BrowserRouter>
            <Link to ="/" className = "nav-link">
                <img src ={logo} alt='store' className= 'navbar-brand'/>
            </Link>
           </BrowserRouter>
         
           <Link to = "/" className = 'nav-link'>        
            <ul className = 'navbar-nav align-items-center'>
                <li className = 'nav-item ml-5'>
                
                </li>
            </ul>
        </Link> 
            
          
         
              <BrowserRouter>
            <Link to ="/cart" className = 'ml-auto' >
                <ButtonContainer>
                   <span className="mr-2">
                      <i className = 'fas fa-cart-plus' /> my cart
                   </span>
                </ButtonContainer>
            </Link>
            </BrowserRouter>
        </NavWrapper>
    
        
        );
    }
}


const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: white !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;





