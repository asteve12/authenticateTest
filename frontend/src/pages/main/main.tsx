import React from 'react'
//main component
import Maincomp from "../../component/main/main"
import {
  MainCont,
  MainBdy,
  MainPara,
  MainBdyCont,
  EditBtn,
  EditBtnWrapper,
} from './mainStyleComp';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import { AnyARecord } from 'dns';


function Main() {
  //@ts-ignore
  const BlogText = useSelector((state) => state.updateBlog);
  
    return (
      <MainCont>
        <Maincomp></Maincomp>
        <MainBdy>
          <MainBdyCont>
            <EditBtnWrapper>
              <Link to='/Chats'>
                <Button variant='text'>Ask Question</Button>
              </Link>

              <EditBtn></EditBtn>
            </EditBtnWrapper>
            {
              BlogText.text.map((eachText:any)=>{
                if(eachText.text){
           return <MainPara>{eachText.text}</MainPara>;
                }

             
              })

            }

           
          </MainBdyCont>
        </MainBdy>
      </MainCont>
    );
}

export default Main
