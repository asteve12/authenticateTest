import styled from "styled-components"

const AuthMain = styled.main`
  width: 100%;
  height: 300px;
  display: flex;
`;

const AuthMainSignup = styled.section`
  width: 50%;
  height: 100%;
  border-right: solid 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const AuthMainLogin = styled.section`
  padding-left: 10px;
  width: 50%;
`;

const AuthLginText = styled.p`
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
  padding: 10px;
  color: grey;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
`;

export { AuthMain, AuthMainSignup, AuthMainLogin, AuthLginText };