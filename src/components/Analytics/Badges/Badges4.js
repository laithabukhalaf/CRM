import React, { Component } from 'react';

class badges4 extends Component {
    render() {
        return (
            <div>
                <div className="badge">
                    <div className="iconBadge"><i className="fas fa-globe-africa"></i></div>
                    <div className="numberBadge">{this.props.hottest}</div>
                    <div className="textBadge">Hottest Country</div>
                </div>
            </div>
        );
    }
}

export default badges4;