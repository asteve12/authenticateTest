import styled from "styled-components"

const InputPassWrap = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const Password = styled.input`
width:50%;
height:60px;
padding:10px;
border-radius: 10px;
`

const ConfirmPassword = styled.input`
  width: 50%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
`

const ErrorMsg = styled.p`
color:red
`



export { InputPassWrap, Password, ConfirmPassword, ErrorMsg };