import React, { Component } from 'react';

const Layout = (props) => {
    return <div className="font-default">
        <div className="border" id={props.section}>
            <div className={`${props.section} border-box-in`}>
                <div className="border-head">
                    <h1>
                        <span className="font-color-red">
                            <i className="far fa-credit-card">
                            </i></span>  Wallet Money
                </h1>
                </div>
                {props.children}
            </div>
        </div>
    </div>
}

export default Layout;
