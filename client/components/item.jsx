import React from 'react';
import styled from 'styled-components'

const GalleryItem = styled.img`
height: 65px;
width: 65px;
padding-top: 5px;
padding-left: 4px;
`;

function Item(props) {

  GalleryItem.displayName = 'GalleryItem'
  return (
      <GalleryItem data-counter={props.counter} src={props.url}></GalleryItem>
  )//
}

export default Item;