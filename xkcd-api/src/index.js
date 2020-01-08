import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    // pass xkcd api through cors-anywhere proxy to prevent access-control-allow-origin error
    fetch('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json, 
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div>Loading... </div>
    } else {
      return(
        <div>
            <img src={items.img}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));