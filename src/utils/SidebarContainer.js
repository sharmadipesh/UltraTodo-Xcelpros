import React, { Component } from 'react';
import Icon from 'utils/Icon';

class SidebarContainer extends Component {
    render() {
        return (
            <div className="sidebar-style-container d-flex flex-column align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-center">
                    <img alt="company-logo" src="img/list.svg" height="30px" width="50px" className="mb-20"/>
                    <Icon className="icon-size-20 mb-25" icon="ICON_NOTIFICATION"/>
                    <Icon className="icon-size-20" icon="ICON_DOWNLOAD"/>
                </div>
                <div className="d-flex flex-column">
                    <Icon className="icon-size-20 mb-25" icon="ICON_CALENDER"/>
                    <Icon className="icon-size-20 mb-25" icon="ICON_ADD"/>
                    <Icon className="icon-size-20 mb-25" icon="ICON_SEARCH"/>
                    <Icon className="icon-size-20 mb-25" icon="ICON_QUESTION"/>
                    <Icon className="icon-size-20 " icon="ICON_USER"/>
                </div>
            </div>
        );
    }
}

export default SidebarContainer;