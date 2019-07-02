import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ItemGallery from './components/itemGallery/itemGallery.jsx';
import MainItem from './components/mainItem/mainItem.jsx';
import styled from 'styled-components'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainPicture: null,
        galleryPictures: null,
        originalPicture: null
      };
    }

    componentDidMount() {
      //gets current api path
      $.get('http://localhost:3003/pictures', (pictures) => {
        pictures = this.setPictures(pictures);
        var mainPicture = pictures.mainPicture;
        var galleryPictures = pictures.galleryPictures;
        this.setState({
          mainPicture,
          galleryPictures,
          originalPicture: mainPicture,
          clickedSlideIndex: 0,
        })
      })
    }

    getId() {
      var path = window.location.pathname;
      if (path === '/') {
        path = 'items/1'
      }
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
      let mainPicture = [];
      let galleryPictures = [];
      for (let picture in pictures) {
        if (pictures[picture].id === id) {
          mainPicture.push(pictures[picture].url)
          galleryPictures.splice(0, 0, pictures[picture].url);
        } else {
          pictures[picture].id % randomNum === 0 ? galleryPictures.push(pictures[picture].url) : null;
        }
      }
      return {
        mainPicture,
        galleryPictures
      };
    }

    setNewMainPicture(e) {
      e.persist();
      var counter = e.target.dataset.counter;
      if (counter % 6 == 0) {
        counter = counter - 6;
      } else if (counter > 6) {
        counter = counter - (counter % 6)
      } else {
        counter = 0;
      }
      this.setState({
        mainPicture: e.target.currentSrc,
        clickedSlideIndex: counter
      })
    }

    render() {
      const StyledContainer = styled.div`
        width: 500px;
        height: 92%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: column;
      `;

      const StyledGalleryDisplay = styled.div`
        width: 100%;
        height: 12%;
      `

      return (
      <StyledContainer>
        <div>
          <MainItem url = {this.state.mainPicture}/>
        </div >
        <StyledGalleryDisplay >
          {this.state.galleryPictures && this.state.galleryPictures.length > 0 ?
          < ItemGallery clickedSlideIndex={this.state.clickedSlideIndex}
          setNewMain={this.setNewMainPicture.bind(this)}
          galleryPictures={this.state.galleryPictures}/>
          : null}
        </StyledGalleryDisplay >
      </StyledContainer>
        )
      }
    }

    ReactDOM.render( <App/> , document.getElementById('root'));