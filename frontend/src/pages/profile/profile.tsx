import React from 'react';
//component
import ProfileComp from '../../component/profile/profile';
import {ProfilePage} from "./profilestyled"
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"


const Profile: React.FC = (props) => {
  //@ts-ignore
  const loginUser = useSelector((state) => state.login);
  //@ts-ignore
  const authUser = useSelector((state) => state.authenticate);

  
  return (
    <>
  
      <ProfilePage>
        <ProfileComp></ProfileComp>
      </ProfilePage>
    </>
  );
};

export default Profile;
