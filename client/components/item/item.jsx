import React from 'react';

function Item(props) {
  return (
    <div className="gallery-item-container">
      <img className="gallery-item" src={props.url}></img>
    </div>
  )//
}

export default Item;