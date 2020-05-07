import React, { Component } from 'react';

class badges1 extends Component {
    render() {
        return (
            <div>
                <div className="badge" id="monthClient">
                    <div className="iconBadge"><i className="fas fa-chart-line"></i></div>
                    <div className="numberBadge">{this.props.newMonthClients.length}</div>
                    <div className="textBadge">New {this.props.currentMonthString} Clients</div>
                </div>
            </div>
        );
    }
}

export default badges1;