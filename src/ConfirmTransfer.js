import React, { Component } from 'react';
import style from './App.css'

class ConfirmTransfer extends Component {

    render() {
        return (
            <div className="font-default">
                <h4 className="font-color-green">ยืนยันการโอน</h4>
                <p>โอนเงินเข้าบัญชี:
                        <span className="font-color-red">
                        {this.props.ConfirmResultListNameTransfer}
                    </span>
                </p>
                <p>จำนวนเงิน:
                        <span className="font-color-red">
                        {this.props.ConfirmResultMoneyTransfer}
                    </span>
                </p>
                <p>ค่าธรรมเนียม:
                        <span className="font-color-red">
                        {this.props.ConfirmResultMoneyTariff}
                    </span>
                </p>
            </div>
        );
    }
}

export default ConfirmTransfer;