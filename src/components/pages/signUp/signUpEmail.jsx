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

function SignUpEmail(props) {
    const {btn} = props;

    const passNext = () => {
        btn(true);
    }

    return (
      <Layout>
        <Title>INHA FIT</Title>
        <InputWrapper>
          <InputDscription>학번을 입력해주세요.</InputDscription>
          <InputSpace>
            <Input type="text" placeholder={"아이디"} />
            <InputPlaceHolder>@inha.edu</InputPlaceHolder>
          </InputSpace>
          <InputBottom>학번을 입력하지 않았습니다.</InputBottom>
        </InputWrapper>
        <BlueButton>인증번호 받기</BlueButton>
        <InputWrapper>
          <InputDscription>이메일을 확인해주세요.</InputDscription>
          <InputSpace>
            <Input type="text" placeholder={"인증번호"} />
          </InputSpace>
          <InputBottom>인증번호가 틀립니다.</InputBottom>
        </InputWrapper>
        <BlueButton onClick={passNext}>다음</BlueButton>

      </Layout>
    );
  }
  
  export default SignUpEmail;