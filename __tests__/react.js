import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/app.jsx';
import Item from '../client/components/item.jsx'
import ItemGallery from '../client/components/itemGallery.jsx';
import MainItem from '../client/components/mainItem.jsx';
var chai = require('chai');
var expect = chai.expect;

describe('<App/>', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
   it('renders the two main components', () => {
     const wrapper = shallow(<App />);
     expect(wrapper.find('MainItem').length).to.equal(1);
     expect(wrapper.find('StyledGalleryDisplay').length).to.equal(1);
   })
});

describe('<Item/>', () => {
  it('renders without crashing', () => {
    shallow(<Item />)
  });
  it('renders main component', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.find('GalleryItem').length).to.equal(1);
  })
})


describe('<ItemGallery/>', () => {
  let dummydata;
  let wrapper;

  beforeEach(() => {
    dummydata = {
      galleryPictures: ["https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File1.jpg",
      "https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File2.jpg",
      "https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File4.jpg"]
    }
    wrapper = shallow(<ItemGallery {...dummydata} />)
  })

  it('renders without crashing', () => {
    shallow(<ItemGallery {...dummydata} />)
  });
  it('renders all main components', () => {
    expect(wrapper.find('StyledCarousel').length).to.equal(1);
    expect(wrapper.find('StyledBackBtn').length).to.equal(1);
    expect(wrapper.find('StyledNxtBtn').length).to.equal(1);
    expect(wrapper.find('StyledSlider').length).to.equal(1);
    expect(wrapper.find('StyledSlide').length).to.equal(3);
  })
})

describe('<MainItem/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainItem/>);
  })
  it('renders without crashing', () => {
    shallow(<MainItem/>);
  });
  it('renders all main components', () => {
    expect(wrapper.find('GalleryItemMainContainer').length).to.equal(1);
    expect(wrapper.find('GalleryItemMain').length).to.equal(1);
  })
})