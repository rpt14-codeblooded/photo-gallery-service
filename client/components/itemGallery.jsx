import React from 'react';
import Item from './item.jsx';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function ItemGallery(props) {
  var counter = 0;
  var gallery = props.galleryPictures.map(ele => {
    counter++;
    return <div className="div-slide">
      <Slide key={counter} index={counter}>{<Item url={ele}/>}</Slide>
      </div>
  })
  return (
    <div className="gallery-ul-container">
      <CarouselProvider
      className="carousel"
        visibleSlides={2}
        step={6}
        naturalSlideWidth={65}
        naturalSlideHeight={65}
        totalSlides={gallery.length}
      >
        <ButtonBack className="back btn">Back</ButtonBack>
        <Slider className="slider">
          {gallery}
        </Slider>
        <ButtonNext className="nxt btn">Next</ButtonNext>
      </CarouselProvider>
    </div>

  )
}

export default ItemGallery;