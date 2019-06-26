import React from 'react';
import Item from '../item/item.jsx'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components'

const StyledSlide = styled(Slide)`
width: 75px;
height: 75px;
border: lightgrey solid 1px;
border-radius: 3px;
`;

const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 450px;
  height: 80px;
`;

const StyledBackBtn = styled(ButtonBack)`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url(https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/ebay-arrow-left.jpg);
  border: none;
  margin-right: 3px;
`;

const StyledNxtBtn = styled(ButtonNext)`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url(https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/ebay-arrow-right.jpg);
  border: none;
  margin-left: 3px;
`
function ItemGallery(props) {
  var counter = 0;
  var gallery = props.galleryPictures.map(ele => {
    counter++;
    return <StyledSlide key={counter} index={counter}>{<Item changeOnLeave={props.changeOnLeave} changeOnEnter={props.changeOnEnter} url={ele}/>}</StyledSlide>

  })
  return (
    <div>
      <StyledCarousel
        visibleSlides={6}
        step={6}
        naturalSlideWidth={30}
        naturalSlideHeight={30}
        totalSlides={gallery.length}
      >
        <StyledBackBtn></StyledBackBtn>
        <StyledSlider>
          {gallery}
        </StyledSlider>
        <StyledNxtBtn></StyledNxtBtn>
      </StyledCarousel>
    </div>

  )
}

export default ItemGallery;