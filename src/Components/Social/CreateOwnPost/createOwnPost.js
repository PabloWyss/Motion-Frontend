import React, { useEffect } from "react";
import {
  Avatar,
  MainContainer,
  InputField,
  SubmitButton,
  SubmitButtonIcon,
  WrapperDiv,
} from "./createOwnPost.style";
import avatarJennifer from "../../../assets/images/users/jennifer.png";
import sendIcon from "../../../assets/svgs/send_button.svg";
import { useSelector } from "react-redux";

const CreateOwnPost = () => {

  const userData = useSelector((state) => state.currentuser); 

  let avatar = '';
  if (userData.currentuser.avatar === null) {
    avatar =
      "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";
  } else {
    avatar = userData.currentuser.avatar;
  }
    
    console.log(userData.currentuser.avatar);

  
  return (
    <MainContainer>
      <WrapperDiv>
        <Avatar src={avatar} />
        <InputField
          type="text"
          placeholder={`What's on your mind, `+ userData.currentuser.first_name}
        />
        <SubmitButton>
          <SubmitButtonIcon src={sendIcon} />
        </SubmitButton>
      </WrapperDiv>
    </MainContainer>
  );
};

export default CreateOwnPost;
