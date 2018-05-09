import React, { Component } from 'react';
import style from './App.css'

class TwoBox extends Component {

    render() {
        return (
            <div className="font-Athiti">
                        <h3>
                            เงินคงเหลือในบัญชี: <span className="font-color-green">{this.props.money}</span>
                        </h3>
                        <select onChange={this.props.setStateNameTransfer}>
                            <option value=''> ---เลือกชื่อบัญชีที่ต้องการโอน--- </option>
                            {
                                this.props.listName.map((val, index) => {
                                    return <option key={index} value={val}> {val} </option>
                                })
                            }
                        </select>
                        <div>
                            <input
                                onChange={this.props.setStateMoney}
                                type="number"
                                value={this.props.moneyTransfer}
                                min="0" max="30000" />
                        </div>
                        <p>ค่าธรรมเนียม: ฿ {this.props.tariff}</p>
                        <a href="#one">
                            <button
                                className="font-Athiti home-button"
                                onClick={this.props.setStateEmpty}> กลับสู่หน้าหลัก
                            </button>
                        </a>
                        <button
                            className="font-Athiti"
                            onClick={this.props.calculateMoney}> โอน
                        </button>
            </div>
        );
    }
}

export default TwoBox;
