import styled from "styled-components"


const ChaCont = styled.section`
width:70%;
max-width:100%;
margin-bottom:5px;

a{
text-decoration:none;
padding:1px;
cursor:pointer;
color:black;
}
display:flex;
justify-content:center;
flex-direction: column;

`;

const ChatWrapper = styled.section`
  min-height: 20px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin: 0px;
  padding:20px;
  margin-top:10px
`;

export { ChaCont, ChatWrapper };