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
    $.get('/id', {id}, (url) => {
      this.setState({
        mainPicture: url
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="main-display">this is the main display</div>
          <Item url={this.state.mainPicture}/>
        <div className="gallery-display">
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));