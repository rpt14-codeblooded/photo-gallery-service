import React from 'react';

function Item(props) {
  return (
    <div className="gallery-item">
      <img src={props.url}></img>
    </div>
  )
}

export default Item;