import React, { Component } from 'react';
import Routes from 'config/Routes';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'views/Dashboard'
import SidebarContainer from 'utils/SidebarContainer';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <SidebarContainer {...this.props}/>
                <Switch>
                    <Route exact  {...this.props} path={Routes.LandingPage} component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default MainLayout;