import React from 'react';
import TitleComponent from './TitleComponent.jsx';
import StarsComponent from './StarsComponent.jsx';
import PriceComponent from './PriceComponent.jsx';
import ItemRemainingComponent from './ItemRemainingComponent.jsx';
import ConditionComponent from './ConditionComponent.jsx';
import styled from 'styled-components'



const ProdContainer = styled.div`
  background: #F8F8F8;
  width: 435px;
  margin: 0 auto;
  padding: 0 20px 15px;
`;
const ButtonContainer = styled.div`
  background: #E2E2E2;
  margin: 0 auto;
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1), 0 0px 0px #aaaaaa;
  height: 120px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;
const ConditionContainer = styled.div`
    order: 1;
    flex-grow: 1;
  `;
  const ItemsRemainingContainer = styled.div`
    order: 2;
    flex-grow: 2;
  `;
  const StarsContainer = styled.div`
    order: 3;
    flex-grow: 1;
`;




const ProductDetailsComponent = (props) => {
    return (
      <div>
        <ProdContainer>
          <TitleComponent {...props} />
          <DetailsContainer>
            <ConditionContainer>
              <ConditionComponent {...props}/>
            </ConditionContainer>
            <ItemsRemainingContainer>
              <ItemRemainingComponent {...props}/>
            </ItemsRemainingContainer>
            <StarsContainer>
              <StarsComponent {...props}/>
            </StarsContainer>
          </DetailsContainer>

          <ButtonContainer>
            <PriceComponent {...props}/>
          </ButtonContainer>
      </ProdContainer>
      </div>
    )
  }


export default ProductDetailsComponent;