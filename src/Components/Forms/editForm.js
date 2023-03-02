import React from 'react'
import { useState } from 'react'
import Overlay from '../Overlay/overlay'
import menuDots from '../../assets/svgs/menu.svg'
import { OverlayButton } from './editForm.style'


const EditForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  // console.log(props.edit)
  // console.log(props.postDetails)
  return (
    <div className="EditForm">
      <OverlayButton onClick={toggleOverlay}><img src={menuDots} alt={menuDots} /></OverlayButton>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h1>{ props.postDetails.user.first_name} { props.postDetails.user.last_name}</h1>
      </Overlay>
    </div>
  );
}

export default EditForm