import React from 'react';
import styled from 'styled-components';

const ProductNumberTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
`

const ProductNumber = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
`


const ProductNumberComponent = (props) => {
  return (
    <div>
      <div><ProductNumberTitle>Product Number:</ProductNumberTitle> <ProductNumber>{props.prodDeets.productNumber}</ProductNumber></div>
    </div>
  )
};
export default ProductNumberComponent;