import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './components/item.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicture: null
    };
  }

  componentDidMount() {
    //gets current api path
    const path = window.location.pathname;
    const regex = /[0-9]/g;
    const id = path.match(regex).join('');
    // $.get('/id', {id}, (data) => {
    //   this.setState({
    //     id
    //   })
    // })
  }

  render() {
    return (
      <div className="container">
        <div className="main-display">this is the main display</div>
        <div className="gallery-display">
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));