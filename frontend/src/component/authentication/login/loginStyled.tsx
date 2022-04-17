import styled from "styled-components"
import {Link} from "react-router-dom"


const ErrorMsg = styled.div`
  color:red;
    font-size:15px;
`

const LoginBottom = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ForgetPassLink = styled(Link)`
  font-size: 12px;
  color: grey;
`;

export { ErrorMsg, LoginBottom, ForgetPassLink };