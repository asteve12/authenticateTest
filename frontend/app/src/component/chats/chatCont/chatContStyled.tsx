import styled from "styled-components"


const ChaCont = styled.section`
width:80%;
margin-bottom:10px;
a{
text-decoration:none;
padding:10px;
cursor:pointer;
}
display:flex;
justify-content:center;
flex-direction: column;

`;

const ChatWrapper = styled.section`
  height: auto;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin: 0px;
  padding:20px;
  margin-top:10px
`;

export { ChaCont, ChatWrapper };