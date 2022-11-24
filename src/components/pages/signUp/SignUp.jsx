import styled from "styled-components";

const BlueButton = styled.button`
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

const Title = styled.h1`
  font-size: 40px;
  min-width: 288px;
  width: 90%;
  font-weight: bold;
  min-height: 60px;
  text-align: center;
  margin-top: 40px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const InputDscription = styled.div`
  min-width: 288px;
  width: 90%;
  height: 40px;
  font-size: 1rem;
  line-height: 40px;
`;

const InputSpace = styled.input`
  box-sizing: border-box;
  min-width: 288px;
  width: 90%;
  height: 60px;
  border: 1px solid #9f9f9f;
  border-radius: 0.5rem;
  line-height: 60px;
  font-size: 1rem;
`;

const InputBottom = styled.div`
  min-width: 288px;
  width: 90%;
  height: 20px;
  font-size: 0.5rem;
  color: #ff0000;
  line-height: 20px;
  margin: 0 auto;
`;

function SignUp(props) {
  return (
    <Layout>
      <Title>INHA FIT</Title>
      <InputWrapper>
        <InputDscription>학번을 입력해주세요.</InputDscription>
        <InputSpace type="text" />
        <InputBottom>학번을 입력하지 않았습니다.</InputBottom>
      </InputWrapper>
      <BlueButton>인증번호 받기</BlueButton>
      <InputWrapper>
        <InputDscription>이메일을 확인해주세요.</InputDscription>
        <InputSpace type="text" />
        <InputBottom>인증번호가 틀립니다.</InputBottom>
      </InputWrapper>
      <BlueButton>다음</BlueButton>
    </Layout>
  );
}

export default SignUp;
