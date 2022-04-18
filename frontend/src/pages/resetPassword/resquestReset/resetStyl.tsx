import styled from "styled-components"


const RestWrapper = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
width:100%;
height:100vh;`

const EmailField = styled.input`
width:100%;
height:50px;
padding:10px;

`

const ErrorMsg = styled.p`
  color: red;
`;

export { RestWrapper, EmailField, ErrorMsg };