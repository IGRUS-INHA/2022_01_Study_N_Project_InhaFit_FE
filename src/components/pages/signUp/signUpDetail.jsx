import {
    BlueButton,
    Title,
    Layout,
    InputWrapper,
    InputDscription,
    InputSpace,
    Input,
    InputPlaceHolder,
    InputBottom,
  } from "./StyledComponent";
  import * as React from 'react'
  import styled from "styled-components";

  const InputBirth = styled.select`
    width: 33%;
    font-size: 1rem;
    padding-left: 0.25em;
    box-sizing: border-box;
    border: 1px solid #9F9F9F;
    border-radius: 0.5em;
  `

const InputSelect = styled.select`
width: 100%;
font-size: 1rem;
padding-left: 0.25em;
box-sizing: border-box;
border: 1px solid #9F9F9F;
border-radius: 0.5em;
`

function SignUpDetail(props) {
    const [now, setNow] =  React.useState( new Date());

    const year = Array(100).fill(now.getFullYear() - 100).map((a,i)=>{
        return i+a+1;
    })

    const month = Array(12).fill(0).map((a,i)=>{
        return i+a+1;
    })

    const day = Array(31).fill(0).map((a,i)=>{
        return i+a+1;
    })


    const optionYear = year.map((y)=>{
        return <option>{y}</option>
    })

    const optionMonth = month.map((y)=>{
        return <option>{y}</option>
    })

    const optionDay = day.map((y)=>{
        return <option>{y}</option>
    })





    const detail = () => {

    }

    return (
      <Layout>
        <Title>INHA FIT</Title>
        <InputWrapper>
          <InputDscription>학번</InputDscription>
          <InputSpace>
            <Input type="text" placeholder={"아이디"} />
            <InputPlaceHolder>@inha.edu</InputPlaceHolder>
          </InputSpace>
          <InputBottom>학번을 입력하지 않았습니다.</InputBottom>
        </InputWrapper>
        <InputWrapper>
          <InputDscription>비밀번호</InputDscription>
          <InputSpace>
            <Input type="text" placeholder={"비밀번호"} />
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <InputWrapper>
          <InputDscription>비밀번호 확인</InputDscription>
          <InputSpace>
            <Input type="text" placeholder={"비밀번호 확인"} />
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <InputWrapper>
          <InputDscription>출생 연도</InputDscription>
          <InputSpace>
            <InputBirth>
            <option defaultValue={"second"}>연도</option>
            {optionYear}
            </InputBirth>
            <InputBirth>
            <option defaultValue={"second"}>월</option>
            {optionMonth}
            </InputBirth>
            <InputBirth>
            <option defaultValue={"second"}>일</option>
            {optionDay}
            </InputBirth>
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <InputWrapper>
          <InputDscription>성별</InputDscription>
          <InputSpace>
          <InputSelect>
          <option defaultValue={"second"}>성별</option>
          <option value="">남자</option>
          <option value="">여자</option>
          </InputSelect>
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <InputWrapper>
          <InputDscription>닉네임</InputDscription>
          <InputSpace>
            <Input type="text" placeholder={"닉네임"} />
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <InputWrapper>
          <InputDscription>전공</InputDscription>
          <InputSpace>
          <InputSelect>
          <option defaultValue={"second"}>전공</option>
          <option value="">컴퓨터공학과</option>
          </InputSelect>
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <BlueButton>가입</BlueButton>
      </Layout>
    );
  }
  
  export default SignUpDetail;