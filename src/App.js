import React, { Component } from 'react';
import HomeTransfer from './HomeTransfer'
import Transfer from './Transfer'
import SuccessTransfer from './SuccessTransfer'
import ConfirmTransfer from './ConfirmTransfer'
import Layout from './Layout'
import Button from './Button'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: 'Kwan Sirikwan',
      money: 50000.00.toFixed(2),
      moneyTransfer: 0,
      tariff: 0,
      listName: ['tarn', 'noon', 'chai', 'eiei'],
      listNameTransfer: '',
      resultListNameTransfer: '',
      resultMoneyTransfer: 0,
      resultMoneyTariff: 0,
      ConfirmResultListNameTransfer: 0,
      ConfirmResultMoneyTransfer: 0,
      ConfirmResultMoneyTariff: 0

    }
    this.setStateMoney = this.setStateMoney.bind(this)
    this.calculateMoney = this.calculateMoney.bind(this)
    this.setStateNameTransfer = this.setStateNameTransfer.bind(this)
  }
  setStateNameTransfer = (event) => {
    this.setState({
      listNameTransfer: event.target.value
    })
  }
  setStateMoney(event) {
    const { moneyTransfer } = this.state
    this.setState({
      moneyTransfer: event.target.value,
      tariff: (moneyTransfer / 10).toFixed(2)
    })
  }
  calculateMoney = () => {
    const { money, moneyTransfer, tariff, listNameTransfer } = this.state
    const calMoney = parseFloat(money) - ((parseFloat(moneyTransfer) + parseFloat(tariff)))
    console.log(calMoney)
    if (calMoney >= 0) {
      this.setState({
        money: calMoney.toFixed(2),
        resultMoneyTransfer: moneyTransfer,
        resultMoneyTariff: tariff,
        resultListNameTransfer: listNameTransfer,
        ConfirmResultMoneyTransfer: 0,
        ConfirmResultMoneyTariff: 0,
        ConfirmResultListNameTransfer: ''
      })
      return document.getElementById('success-transfer').scrollIntoView();
    }
  }
  setMoneyConfirm = () => {
    const { money, moneyTransfer, tariff, listNameTransfer } = this.state
    const calMoney = parseFloat(money) - ((parseFloat(moneyTransfer) + parseFloat(tariff)))
    const limitTransfer = 30000
    console.log(moneyTransfer)
    if (calMoney >= 0 && moneyTransfer !== 0 && moneyTransfer > 0 && moneyTransfer <= limitTransfer && listNameTransfer !== '') {
      this.setState({
        ConfirmMoney: calMoney,
        ConfirmResultMoneyTransfer: moneyTransfer,
        ConfirmResultMoneyTariff: tariff,
        ConfirmResultListNameTransfer: listNameTransfer
      })
      return document.getElementById('confirm-transfer').scrollIntoView();
    }
    else if (moneyTransfer > limitTransfer) {
      alert('กรุณากรอกจำนวนเงินน้อยกว่า 30,000!!')
    }
    else if (listNameTransfer === '') {
      alert('กรุณาเลือกบัญชีโอน!!')
    }
    else if (moneyTransfer === 0 || moneyTransfer === '' || moneyTransfer <= 0) {
      alert('กรุณาระบุจำนวนเงิน!!')
    }
    else {
      alert('ยอดเงินคงเหลือไม่พอใช้!!')
    }
  }
  setStateEmpty = () => {
    this.setState({
      moneyTransfer: 0,
      tariff: 0,
      resultMoneyTransfer: 0,
      resultMoneyTariff: 0,
      resultListNameTransfer: ''
    })
    return document.getElementById('home-transfer').scrollIntoView();
  }
  returnTransfer = () => {
    return document.getElementById('transfer').scrollIntoView();
  }

  render() {
    const {
      name,
      money,
      moneyTransfer,
      tariff,
      listName,
      listNameTransfer,
      resultListNameTransfer,
      resultMoneyTransfer,
      resultMoneyTariff,
      ConfirmResultListNameTransfer,
      ConfirmResultMoneyTransfer,
      ConfirmResultMoneyTariff
    } = this.state
    return (
      <div>
        <Layout section='home-transfer'>
          <HomeTransfer name={name} money={money} />
        </Layout>
        <Layout section='transfer'>
          <Transfer
            setStateNameTransfer={this.setStateNameTransfer}
            money={money}
            listName={listName}
            setStateMoney={this.setStateMoney}
            moneyTransfer={moneyTransfer}
            tariff={tariff}
          />
          <Button
            valueButton='กลับสู่หน้าหลัก'
            styleButton='font-Athiti home-button'
            onClick={this.setStateEmpty}
          />
          <Button
            valueButton='โอน'
            styleButton='font-Athiti'
            onClick={this.setMoneyConfirm}
          />
        </Layout>
        <Layout section='confirm-transfer'>
          <ConfirmTransfer
            ConfirmResultListNameTransfer={ConfirmResultListNameTransfer}
            ConfirmResultMoneyTransfer={ConfirmResultMoneyTransfer}
            ConfirmResultMoneyTariff={ConfirmResultMoneyTariff}
          />
          <Button
            valueButton='กลับ'
            styleButton='font-Athiti home-button'
            onClick={this.returnTransfer}
          />
          <Button
            valueButton='โอน'
            styleButton='font-Athiti'
            onClick={this.calculateMoney}
          />
        </Layout>
        <Layout section='success-transfer'>
          <SuccessTransfer
            resultListNameTransfer={resultListNameTransfer}
            resultMoneyTransfer={resultMoneyTransfer}
            resultMoneyTariff={resultMoneyTariff}
          />
          <Button
            valueButton='กลับสู่หน้าหลัก'
            styleButton='font-Athiti home-button margin-button'
            onClick={this.setStateEmpty}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
