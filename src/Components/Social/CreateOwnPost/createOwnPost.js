import React from 'react'
import { Avatar, MainContainer,InputField,SubmitButton, SubmitButtonIcon } from './createOwnPost.style'
import avatarJennifer from '../../../assets/images/users/jennifer.png'
import sendIcon from '../../../assets/svgs/send_button.svg'

const CreateOwnPost = () => {
  return (
    <MainContainer>
      <Avatar src={ avatarJennifer} />
      <InputField type='text' placeholder={`What's on your mind, Jennifer?`} />
      <SubmitButton>
        <SubmitButtonIcon src={ sendIcon} />
      </SubmitButton>
    </MainContainer>

  )
}

export default CreateOwnPost