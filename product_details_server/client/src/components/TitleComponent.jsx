import React from 'react';
import styled from 'styled-components';

const TitleHeader = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.3em;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
  `
const TitleComponent = (props) => {
  return (
    <div>
      <TitleHeader>{props.prodDeets.productTitle}</TitleHeader>
    </div>
  )
};

export default TitleComponent;