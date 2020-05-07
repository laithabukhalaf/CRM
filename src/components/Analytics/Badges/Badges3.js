import React, { Component } from 'react';

class badges3 extends Component {
    render() {
        return (
            <div>
                <div className="badge" id="monthClient">
                    <div className="iconBadge"><i className="fas fa-user"></i></div>
                    <div className="numberBadge">{this.props.outStanding}</div>
                    <div className="textBadge">OutStanding Clients</div>
                </div>
            </div>
        );
    }
}

export default badges3;