import React, { Component } from 'react';
import style from './App.css'

class HomeTransfer extends Component {

    render() {
        return (
            <div className="font-default">
                        <h3>
                            ชื่อบัญชี: <span className="font-color-orange">{this.props.name}
                            </span>
                        </h3>
                        <h3>
                            เงินคงเหลือในบัญชี: <span className="font-color-green">{this.props.money}</span> บาท
                        </h3>
                        <a href="#transfer">
                            <button className="font-default"> โอน </button>
                        </a>
            </div>
        );
    }
}

export default HomeTransfer;
