import styled from "styled-components"
import EditModal from '../../ui/editModal/editModal';



const MainCont = styled.div`
  width: 100%;
  background-color: #F2F2F2;
  height: auto;
`;

const MainBdy = styled.div`
width:100%;
height:auto;
display:flex;
justify-content: center;
margin-top:30px;
`
const MainBdyCont = styled.div`
min-height:auto;
max-width:50%;
background-color:white; 
border-radius: 10px;
box-sizing:border-box;
padding:2%;
@media(max-width:700px){
  max-width:90%

}
`

const MainPara = styled.p`

`

const EditBtn = styled(EditModal)`
margin-left:auto;
`;

const EditBtnWrapper = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
a{
  text-decoration: none;
}
`






export {
   EditBtnWrapper,
  MainCont,
  MainBdy,
  MainPara,
  MainBdyCont,
  EditBtn,
};