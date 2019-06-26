import React from 'react';
import Item from '../item/item.jsx'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function ItemGallery(props) {
  var counter = 0;
  var gallery = props.galleryPictures.map(ele => {
    counter++;
    return <Slide className="slide" key={counter} index={counter}>{<Item url={ele}/>}</Slide>

  })
  return (
    <div>
      <CarouselProvider
      className="carousel"
        visibleSlides={6}
        step={6}
        naturalSlideWidth={30}
        naturalSlideHeight={30}
        totalSlides={gallery.length}
      >
        <ButtonBack className="back btn"></ButtonBack>
        <Slider className="slider">
          {gallery}
        </Slider>
        <ButtonNext className="nxt btn"></ButtonNext>
      </CarouselProvider>
    </div>

  )
}

export default ItemGallery;