import styled from "styled-components"

const ChatPage = styled.div`
  display: flex;
  background-color: #dae0e6;
  min-height:100vh;

`;


const ChatCompWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 95%;
  width:70%;
  margin-top:30px;

`



const ProfCardWrapper = styled.div`
position: absolute;
height:100vh;
width:100%;

`

const ProfChatBxWrapper = styled.div`
height:auto;
width:100%;
display: flex;
justify-content: center;
position: fixed;
bottom: 0px;

`

const ChatDetail = styled.div`
margin-top:100px;
display:flex;
width:100%;
justify-content: center;
height:auto;
padding-bottom:20px

`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export {LoaderWrapper, ChatCompWrapper, ChatPage, ProfCardWrapper, ProfChatBxWrapper, ChatDetail };