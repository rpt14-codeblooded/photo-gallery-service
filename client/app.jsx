import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './components/item.jsx';
import $ from 'jquery';
import ItemGallery from './components/itemGallery.jsx';
import MainItem from './components/mainItem.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainPicture: null,
        galleryPictures: null
      };
    }

    componentDidMount() {
      //gets current api path
      $.get('/pictures', (pictures) => {
        pictures = this.setPictures(pictures);
        var mainPicture = pictures.mainPicture;
        var galleryPictures = pictures.galleryPictures;
        this.setState({
          mainPicture,
          galleryPictures
        })
      })
    }

    getId() {
      const path = window.location.pathname;
      const regex = /[0-9]/g;
      const id = path.match(regex).join('');
      return id;
    }

    getRandomNum(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setPictures(pictures) {
      var id = this.getId();
      var randomNum = this.getRandomNum(2, 2);
      console.log(randomNum);
      let mainPicture = [];
      let galleryPictures = [];
      for (let picture in pictures) {
        if (pictures[picture].id === id) {
          mainPicture.push(pictures[picture].url)
          galleryPictures.push(pictures[picture].url);
        } else {
          pictures[picture].id % randomNum === 0 ? galleryPictures.push(pictures[picture].url) : null;
        }
      }
      return {
        mainPicture,
        galleryPictures
      };
    }

    render() {
      return (
      <div className="container">
        <div className = "main-display" >
          <MainItem url = {this.state.mainPicture}/>
        </div >
        <div className="gallery-display">
          {this.state.galleryPictures && this.state.galleryPictures.length > 0 ? < ItemGallery galleryPictures = {this.state.galleryPictures}/> : null}
        </div >
      </div>
        )
      }
    }

    ReactDOM.render( <App/> , document.getElementById('root'));