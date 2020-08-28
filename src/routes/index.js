import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import DefaultLayout from '../components/defaultHome/index';
import Home from '../view/Main/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <DefaultLayout>
                <Route exact path='/' component={Home} />
            </DefaultLayout>
        </Switch>
    </BrowserRouter>
);

export default Routes;