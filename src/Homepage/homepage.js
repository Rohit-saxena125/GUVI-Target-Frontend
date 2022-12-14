import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Signup from '../Component/Signup'
import Login from '../Component/Login';
import AdditionalDetails from "../Component/Profile";
const homepage = () => {
    return (
        <>
        <Router>
        <Switch>
        <Route exact path="/" >
            <Login email={email}/>
        </Route>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/additionalDetails/:email" >
             <AdditionalDetails />
            
        </Route>

        </Switch>
        </Router>
        </>
    );
}
export default homepage;