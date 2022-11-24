import * as React from "react"
import SignUpEmail from "./signUpEmail";
import SignUpDetail from "./signUpDetail";

function Index(props) {
  const [checkEmalil, setCheckEmail] = React.useState(false);
  return (
    checkEmalil?<SignUpDetail />:<SignUpEmail btn={setCheckEmail}/>
  );
}

export default Index;
