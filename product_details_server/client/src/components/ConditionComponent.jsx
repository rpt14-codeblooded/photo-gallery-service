import React from 'react';
import styled from 'styled-components';

const ConditionHeader = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7em;
  padding: 0;
  margin: 0;
`
const ConditionData = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`


const ConditionComponent = (props) => {
  return (
    <div>
      <ConditionHeader>Condition: <ConditionData>{props.prodDeets.condition}</ConditionData></ConditionHeader>
    </div>
  )
};

export default ConditionComponent;