import React from 'react';
import styled from 'styled-components';
import { FaFire } from 'react-icons/fa';

const FireIconContainer = styled.span`
  color: firebrick;
`

const ItemRemaining = styled.p`
  padding: 0;
  margin: 0;
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7em;
`
const RemainingnNumber = styled.span`
  font-weight: 700;
`
const ItemRemainingComponent = (props) => {
  return (
    <div>
      {
        props.prodDeets.limitRemaining < 10 ? <ItemRemaining>Items Remaining : <RemainingnNumber>{props.prodDeets.limitRemaining}</RemainingnNumber> <FireIconContainer><FaFire /><FaFire /></FireIconContainer></ItemRemaining> : <ItemRemaining>Items Remaining : <RemainingnNumber>{props.prodDeets.limitRemaining}</RemainingnNumber></ItemRemaining>
      }
    </div>
  )
};

export default ItemRemainingComponent;