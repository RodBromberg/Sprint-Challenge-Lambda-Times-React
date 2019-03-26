import React from 'react';
import styled, { css } from 'styled-components';

const Temp = styled.span `
align-self: flex-end;
font-size: 11px;
margin-right: 25px;
flex: 1
font-weight: bold;
letter-spacing: 1px;
text-align: right;


`


const h1_head = styled.h1 `
font-size: 60px
flex: 8;
font-family: Didot, serif;
font-weight: bold;
color: #000;
text-align: center;

`

const Date = styled.span `
  margin-left: 25px;
  flex: 1;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

`



const Header = () => {
  return (
    <HeaderContainer>
      <Date className="date">SMARCH 32, 2018</Date>
      <h1_head>Lambda Times</h1_head>
      <Temp className="temp">98°</Temp>
    </HeaderContainer>
  )
}

export default Header


//fdsfds