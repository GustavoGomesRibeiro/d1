import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import DefaultLayout from '../components/defaultHome/index';
import Home from '../view/Main/index';
import Execution from '../view/Execution/index';
// Caso fosse realizar login, seria necessario criar um privateRoute

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <DefaultLayout>
                <Route exact path='/' component={Home} />
                <Route path='/Execution' component={Execution} />
                {/* <Route path='/Profile' component={Profile} /> */}
            </DefaultLayout>
                <Route path='*' component={() => <h1>page not Found 404</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;