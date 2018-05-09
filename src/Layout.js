import React, { Component } from 'react';
import style from './App.css'

class Layout extends Component {

    render() {
        return (
            <div className="font-Athiti">
                 <div className="border" id={this.props.idBox}>
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
