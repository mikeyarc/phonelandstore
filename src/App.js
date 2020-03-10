import React, {Component}from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';



class App extends Component {
    render(){
        return (
            <React.Fragment>
                <BrowserRouter>
                    
              
                <NavBar/>
                <Switch>
                    <Route exact path = "/" component = {ProductList}/>
                    <Route path = "/details" component = {Details}/>
                    <Route path = "/cart" component = {Cart}/>
                    <Route component = {Default}/>
                </Switch>
                <Modal />
            
       </BrowserRouter>
           
            </React.Fragment>
    );
    } 
}

export default App;
