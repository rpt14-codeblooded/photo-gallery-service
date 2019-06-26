import React from 'react';
import styled from 'styled-components'


function Item(props) {
  const GalleryItem = styled.img`
    height: 65px;
    width: 65px;
    padding-top: 5px;
    padding-left: 4px;
  `;
  return (
    <div>
      <GalleryItem onMouseEnter={(e) => props.changeOnEnter(e)} onMouseLeave={(e) => props.changeOnLeave(e)} src={props.url}></GalleryItem>
    </div>
  )//
}

export default Item;