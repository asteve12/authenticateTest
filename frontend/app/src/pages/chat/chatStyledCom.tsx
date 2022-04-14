import styled from "styled-components"

const ChatPage = styled.div`
  display: flex;
  background-color: #dae0e6;
  min-height:100vh;
  padding-bottom: 90px;
`;


const ChatCompWrapper = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;

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
height:auto

`


export { ChatCompWrapper, ChatPage, ProfCardWrapper, ProfChatBxWrapper, ChatDetail };