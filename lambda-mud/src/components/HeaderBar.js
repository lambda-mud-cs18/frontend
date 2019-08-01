import React from 'react';
import styled from 'styled-components';

const HeaderBar = () => {
  return (
    <StyledHeader>
      <div className="container">
        <h1>Lambda Treasure Hunt</h1>
        <h4>(Enter at your own risk)</h4>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 75px;
  background: #3b3f3f;
  .container {
    display: flex;
    flex-direction:column
    align-items: center;
    color: #e5e5e5;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  h1 {
    margin: 0 auto;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 500;
    font-style: italic
  }

  h4 {
    font-size: 1.3rem;
    font-style: oblique;
  }
`

export default HeaderBar