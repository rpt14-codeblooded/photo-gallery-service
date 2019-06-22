import React from 'react';

function MainItem(props) {
  return (
    <div className="gallery-item-main-container">
      <img className="gallery-item-main" src={props.url}></img>
    </div>
  )
}

export default MainItem;