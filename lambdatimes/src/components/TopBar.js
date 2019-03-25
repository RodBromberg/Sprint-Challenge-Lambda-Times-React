import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file



const TopBar = () => {
  return (
    <TopBarS>
      <Container>
        <LeftContainer>
          <span>TOPICS</span><span>SEARCH</span>
        </LeftContainer>
        <CenterContainer>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </CenterContainer>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </Container>
    </TopBarS>
  )
}
const TopBarS = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 44px;
    background-color: #333;
    align-items: none;
    flex-direction: row;
    position: fixed;
 
    
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    letter-spacing: 1px;
    padding: 0 10px;
    color: #fff;
 
    
`;

const LeftContainer = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`;

const CenterContainer = styled.div`
    display: flex;
    flex: 3;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 9px; 
    span {
      cursor: pointer;
      margin-right: 5%
    }
    span:last-child {
      margin-right: 0;
    }
    span: hover {
      text-decoration: underline;
    }
`;

const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    font-size: 11px;
    font-weight: bold; 
    align-items: center;
    flex-direction: row;

`;


export default TopBar;