import React, { Component } from 'react';
import style from './App.css'
import OneBox from './OneBox'
import TwoBox from './TwoBox'
import TreeBox from './TreeBox'
import Layout from './Layout'
import Button from './Button'

class App extends Component {

  constructor() {
    const money = 50000
    parseFloat(money).toFixed(2)
    super()
    this.state = {
      name: 'Kwan Sirikwan',
      money,
      moneyTransfer: 0,
      tariff: 0,
      listName: ['tarn', 'noon', 'chai', 'eiei'],
      listNameTransfer: '',
      resultListNameTransfer: '',
      resultMoneyTransfer: 0,
      resultMoneyTariff: 0
    }
    this.setStateMoney = this.setStateMoney.bind(this)
    this.calculateMoney = this.calculateMoney.bind(this)
    this.setStateNameTransfer = this.setStateNameTransfer.bind(this)
  }
  setStateNameTransfer = (evt) => {
    this.setState({
      listNameTransfer: evt.target.value
    })
  }
  setStateMoney(evt) {
    this.setState({
      moneyTransfer: evt.target.value,
      tariff: this.state.moneyTransfer / 10
    })
  }
  calculateMoney() {
    
    const { money, moneyTransfer, tariff, listNameTransfer } = this.state
    let calMoney = parseFloat(money) - ((parseFloat(moneyTransfer) + parseFloat(tariff)))
    console.log(this.state.moneyTransfer)
    console.log(this.state.tariff)
    console.log(calMoney)
    console.log(listNameTransfer)
    if (calMoney >= 0 && moneyTransfer !== 0 && listNameTransfer !== '') {
      this.setState({
        money: calMoney,
        resultMoneyTransfer: moneyTransfer,
        resultMoneyTariff: tariff,
        resultListNameTransfer: listNameTransfer
      })
      return document.getElementById('tree').scrollIntoView();
    }
    else if (listNameTransfer === '') {
      alert('กรุณาเลือกบัญชีโอน!!')
    }
    else if (moneyTransfer === 0 || moneyTransfer === '') {
      alert('กรุณาระบุจำนวนเงิน!!')
    }
    else {
      alert('ยอดเงินคงเหลือไม่พอใช้!!')
    }
    return calMoney
  }
  setStateEmpty = () => {
    this.setState({
      moneyTransfer: 0,
      tariff: 0,
      resultMoneyTransfer: 0,
      resultMoneyTariff: 0,
      resultListNameTransfer: ''
    })
    return document.getElementById('one').scrollIntoView();
  }

  render() {
    return (
      <div>
        <Layout idBox='one' section='one-section'>
          <OneBox name={this.state.name} money={this.state.money}/>
        </Layout>
        <Layout idBox='two' section='two-section'>
          <TwoBox
            setStateNameTransfer={this.setStateNameTransfer}
            money={this.state.money}
            listName={this.state.listName}
            setStateMoney={this.setStateMoney}
            moneyTransfer={this.state.moneyTransfer}
            tariff={this.state.tariff}
          />
          <Button
            valueButton='กลับสู่หน้าหลัก'
            styleButton='font-Athiti home-button'
            evtButton={this.setStateEmpty}
          />
          <Button
            valueButton='โอน'
            styleButton='font-Athiti'
            evtButton= {this.calculateMoney}
          />
        </Layout>
        <Layout idBox='tree' section='tree-section'>
          <TreeBox
            resultListNameTransfer={this.state.resultListNameTransfer}
            resultMoneyTransfer={this.state.resultMoneyTransfer}
            resultMoneyTariff={this.state.resultMoneyTariff}
          />
          <Button
            valueButton='กลับสู่หน้าหลัก'
            styleButton='font-Athiti home-button margin-button'
            evtButton= {this.setStateEmpty}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
