import React, { Component } from 'react';
import sum, { sumOdd, asyncAdd } from './sum';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      count: 4,
      asyncSum: 0
    };
  }

  getClassName = (val) => {
    return val % 2 === 0 ?
      "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1"
  }

  parsedSuccessfully = (input) => {
    try {
      const n = Number(input);
      console.log(`${input} parsed to ${n}`);
      if (n) return true;
      else return false;
    }
    catch(err) {
      console.log('err');
      return false;
    }
  }

  getInputClassName = (input) => {
    return this.parsedSuccessfully(input) ?
      "bg-primary text-white text-center p-2 m-1"
      : "bg-danger text-white text-center p-2 m-1"
  }

  number1 = "15.1";
  number2 = "15.11a"

  arr2Sum = [1, 2, 5, 2];


  handleClick = async e => {
    e.preventDefault();
    const pr = asyncAdd(this.arr2Sum);
    pr.then(res => {
      console.log('asyncSum result: ', res);
      this.setState({asyncSum: res});
    });
    this.setState({count: this.state.count+1});

  }

  render = () =>
  <div>
    <h4 className={this.getClassName(this.state.count)}>
      <button className="btn btn-info m-2" onClick={this.handleClick}>click me</button>
    </h4>
    <h4 className={this.getInputClassName(this.number1)}>
    {this.number1}
    </h4>
    <h4 className={this.getInputClassName(this.number2)}>
    {this.number2}
    </h4>
    <h4 className={this.getInputClassName(this.number2)}>
    {sum(this.arr2Sum)}
    </h4>
    <h4 className={this.getInputClassName(this.number2)}>
    {sumOdd(this.arr2Sum)}
    </h4>
    <h4 className={this.getInputClassName(this.number2)}>
    {this.state.asyncSum}
    </h4>
  </div>
}

export default App;
