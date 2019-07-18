import ReactStars from 'react-stars'
import React from 'react';
import styled from 'styled-components';


const StarNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StarNumberText = styled.div`
  padding: 0;
  margin: 0;
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7em;
  order: 1;
  flex-grow: 1;
`
const StarNumber = styled.span`
  order: 2;
  flex-grow: 1;
`
const ratingChanged = (newRating) => {
  // console.log(newRating)
}


const StarsComponent = (props) => {
  return (
    <div>
      <StarNumberContainer>
        <StarNumberText>Rating: </StarNumberText><StarNumber><ReactStars count={props.prodDeets.stars} onChange={ratingChanged} size={12} color2={'#ffd700'} /></StarNumber>
      </StarNumberContainer>
    </div>
  )
};

export default StarsComponent;


