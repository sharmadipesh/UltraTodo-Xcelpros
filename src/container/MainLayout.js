import React, { Component } from 'react';
import Routes from 'config/Routes';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'views/Dashboard'

class MainLayout extends Component {
    render() {
        return (
            <div>
                <div>
                        <Switch>
                            <Route exact  {...this.props} path={Routes.LandingPage} component={Dashboard} />
                        </Switch>
                </div>
            </div>
        );
    }
}

export default MainLayout;