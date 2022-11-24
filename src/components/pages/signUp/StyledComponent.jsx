import styled from "styled-components";

export const BlueButton = styled.button`
min-width: 288px;
  width: 90%;
  height: 3em;
  background-color: #1c85e6;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 0.5em;
  text-align: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 40px;
  min-width: 288px;
  width: 90%;
  font-weight: bold;
  min-height: 60px;
  text-align: center;
  margin-top: 40px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const InputDscription = styled.div`
  min-width: 288px;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  line-height: 40px;
`;

export const InputSpace = styled.div`
min-width: 288px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  position: relative;
  line-height: 60px;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.input`
  box-sizing: border-box;
  min-width: 288px;
  width: 100%;
  height: 60px;
  border: 1px solid #9f9f9f;
  border-radius: 0.5rem;
  font-size: inherit;
  line-height: inherit;
  padding-left: 15px;
`;

export const InputPlaceHolder = styled.span`
display: inline-block;
height: 100%;
width: 40%;
right: 0;
top: 0;
font-size: inherit;
  line-height: inherit;
  text-align: center;
  opacity: 0.5;
position: absolute;
`

export const InputBottom = styled.div`
  min-width: 288px;
  width: 100%;
  height: 20px;
  font-size: 0.5rem;
  color: #ff0000;
  line-height: 20px;
  
`;