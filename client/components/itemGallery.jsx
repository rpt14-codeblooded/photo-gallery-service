import React from 'react';
import Item from './item.jsx';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function ItemGallery(props) {
  var counter = 0;
  var gallery = props.galleryPictures.map(ele => {
    counter++;
    return <Slide key={counter} index={counter}>{<Item url={ele}/>}</Slide>
  })
  return (
    <div className="gallery-ul-container">
      <CarouselProvider
        visibleSlides={6}
        step={6}
        naturalSlideWidth={200}
        naturalSlideHeight={125}
        totalSlides={gallery.length}
      >
        <Slider>
          {gallery}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>

  )
}

export default ItemGallery;