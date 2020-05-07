import React, { Component } from 'react';

class badges2 extends Component {
    render() {
        return (
            <div>
                <div className="badge" id="monthClient">
                    <div classNam="iconBadge"><i className="fas fa-envelope"></i></div>
                    <div className="numberBadge">{this.props.emailSent}</div>
                    <div className="textBudge">Emails Sent</div>
                </div>
            </div>
        );
    }
}

export default badges2;