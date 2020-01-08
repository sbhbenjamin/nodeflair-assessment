import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    // use target name on event to target the key in the state object with the same name using bracket syntax
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {

    this.setState({result: Number(this.state.num1) + Number(this.state.num2)})
    e.preventDefault();
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Addition Calculator</h1>
        <form>
          <div className="form-group">
            <input type="number" name="num1" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="number" name="num2" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" onClick={this.handleSubmit}>Calculate</button>
          </div>
        </form>
        <h3>Result: {this.state.result}</h3>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Form />, rootElement);