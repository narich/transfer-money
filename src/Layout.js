import React, { Component } from 'react';

class Layout extends Component {

    render() {
        return (
            <div className="font-default">
                <div className="border" id={this.props.section}>
                    <div className={`${this.props.section} border-box-in`}>
                        <div className="border-head">
                            <h1>
                                <span className="font-color-red">
                                    <i className="far fa-credit-card">
                                    </i></span>  Wallet Money
                            </h1>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
