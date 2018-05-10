import React, { Component } from 'react';
import style from './App.css'

class SuccessTransfer extends Component {

    render() {
        return (
            <div className="font-Athiti">
                <h4 className="font-color-green">ทำรายการสำเร็จ</h4>
                <p>โอนเงินเข้าบัญชี:
                        <span className="font-color-red">
                        {this.props.resultListNameTransfer}
                    </span>
                </p>
                <p>จำนวนเงิน:
                        <span className="font-color-red">
                        {this.props.resultMoneyTransfer}
                    </span>
                </p>
                <p>ค่าธรรมเนียม:
                        <span className="font-color-red">
                        {this.props.resultMoneyTariff}
                    </span>
                </p>
            </div>
        );
    }
}

export default SuccessTransfer;
