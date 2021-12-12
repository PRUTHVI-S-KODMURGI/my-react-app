import React,{useState} from "react";
import './index.css';
import AboutUs from './about_us';
import ContactUs from './contact_us'
import Header from './header'
import Footer from './footer'
import Home from "./Home";
import Complaints from "./complaints";
import Products from "./product_Folder/products";
import Products1 from "./product_Folder/products1";
import Products2 from "./product_Folder/products2";
import Products3 from "./product_Folder/products3";
import Products4 from "./product_Folder/products4";
import Products5 from "./product_Folder/products5";
import Products6 from "./product_Folder/products6";
import Support from "./support";
import Login from "./business_login"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Data from "./Data";
const WebPage = () =>
{
    const [ user, setLoginUser] = useState({});
    return ( 
        <Router>
            <div>
                <Header />
                <div>
                <Switch>
                    <Route exact path='/about_us.js'>
                        <AboutUs /> 
                    </Route>
                    <Route exact path='/contact_us.js'>
                        <ContactUs />
                    </Route>
                    <Route exact path='/products.js'>
                        <Products />
                    </Route>
                    <Route exact path='/products1.js'>
                        <Products1 />
                    </Route>
                    <Route exact path='/products2.js'>
                        <Products2 />
                    </Route>
                    <Route exact path='/products3.js'>
                        <Products3 />
                    </Route>
                    <Route exact path='/products4.js'>
                        <Products4 />
                    </Route>
                    <Route exact path='/products5.js'>
                        <Products5 />
                    </Route> 
                    <Route exact path='/products6.js'>
                        <Products6 />
                    </Route>
                    <Route exact path='/support.js'>
                        <Support />
                    </Route>
                    <Route exact path='/complaints.js'>
                        <Complaints />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path="/data.js">
                       {
                         user && user._id ? <Data setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
                       }
                    </Route>
                    <Route exact path="/business_login.js">
                       <Login setLoginUser={setLoginUser}/>
                    </Route>
                </Switch>
                </div>
                <Footer />
            </div>


        </Router>
     );
}
export default WebPage;