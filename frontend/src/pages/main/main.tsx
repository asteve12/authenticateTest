import React,{useEffect} from 'react'
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
import {useSelector,useDispatch} from "react-redux"
import { AnyARecord } from 'dns';
import { updateBlogAsync } from '../../redux/updateBlog';


function Main() {
  //@ts-ignore
  const BlogText = useSelector((state) => state.updateBlog);
  const getBlogPost = useDispatch()
  useEffect(()=>{
    getBlogPost(updateBlogAsync({type:"getMsg"}));


  },[])
  
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
