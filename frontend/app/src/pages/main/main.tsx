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


function main() {
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

            <MainPara>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </MainPara>
            <MainPara>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </MainPara>
          </MainBdyCont>
        </MainBdy>
      </MainCont>
    );
}

export default main
