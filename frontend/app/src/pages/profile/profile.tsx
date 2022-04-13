import React from 'react';
//component
import ProfileComp from '../../component/profile/profile';
import {ProfilePage} from "./profilestyled"


const Profile: React.FC = (props) => {
  return (
    <ProfilePage>
      <ProfileComp></ProfileComp>
    </ProfilePage>
  );
};

export default Profile;
