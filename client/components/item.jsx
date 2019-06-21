import React from 'react';

function Item(props) {
  return (
    <div>
      <img className="gallery-item" src={props.url}></img>
    </div>
  )
}

export default Item;