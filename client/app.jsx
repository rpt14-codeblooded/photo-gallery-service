import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>this is an app</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));