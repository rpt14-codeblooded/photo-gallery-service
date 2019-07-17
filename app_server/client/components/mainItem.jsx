import React from 'react';
import styled from 'styled-components'


const GalleryItemMainContainer = styled.div`
  border: lightgrey solid 1px;
  border-radius: 3px;
  margin-bottom: 23px;
  height: 498px;
`;

const GalleryItemMain = styled.img`
  width: 100%;
  height: 100%;
`;


function MainItem(props) {
  //for testing
  GalleryItemMain.displayName = 'GalleryItemMain';
  GalleryItemMainContainer.displayName = 'GalleryItemMainContainer'
  return (
    <GalleryItemMainContainer>
      <GalleryItemMain src={props.url}></GalleryItemMain>
    </GalleryItemMainContainer>
  )
}

export default MainItem;