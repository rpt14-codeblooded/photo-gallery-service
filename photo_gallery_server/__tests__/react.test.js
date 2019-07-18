import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/app.jsx';
import Item from '../client/components/item.jsx'
import ItemGallery from '../client/components/itemGallery.jsx';
import MainItem from '../client/components/mainItem.jsx';
import 'jest-styled-components'


describe('<App/>', () => {
  test('renders without crashing', () => {
     shallow(<App />);
   });
   test('renders the two main components', () => {
     const wrapper = shallow(<App />);
     expect(wrapper.find('MainItem').length).toEqual(1);
     expect(wrapper.find('StyledGalleryDisplay').length).toEqual(1);
   })
});

describe('<Item/>', () => {
  test('renders without crashing', () => {
    shallow(<Item />)
  });
  test('renders main component', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.find('GalleryItem').length).toEqual(1);
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
    expect(wrapper.find('StyledCarousel').length).toEqual(1);
    expect(wrapper.find('StyledBackBtn').length).toEqual(1);
    expect(wrapper.find('StyledNxtBtn').length).toEqual(1);
    expect(wrapper.find('StyledSlider').length).toEqual(1);
    expect(wrapper.find('StyledSlide').length).toEqual(3);
  })
})

describe('<Slide>', () => {
 let dummyData;
 let wrapper;
  beforeEach(() => {
    dummyData = {
      galleryPictures: ["https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File1.jpg",
      "https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File2.jpg",
      "https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File4.jpg"]
    }
    wrapper = shallow(<ItemGallery {...dummyData} />)
  })

  test('it works', () => {
    const container = wrapper.find('StyledSlide').first();
    expect(container).toMatchSnapshot()
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
    expect(wrapper.find('GalleryItemMainContainer').length).toEqual(1);
    expect(wrapper.find('GalleryItemMain').length).toEqual(1);
  })
})