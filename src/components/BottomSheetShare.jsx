import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BottomSheet, BottomSheetBoilerplate } from "./common-components";

export const BottomSheetShare = (props) => {
  const { isOpen, toggleOpen } = props
  const iconMap = [
    {
      icon: faFacebookF,
      color: "#3b5998"
    },
    {
      icon: faXTwitter,
      color: "black"
    },
    {
      icon: faGooglePlusG,
      color: "#dd4b39",
    },
    {
      icon: faLinkedinIn,
      color: "#0077b5"
    }
  ]
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={toggleOpen}
      snapPoints={[0.20, 0]}
      detent="content-height"
    >
      <BottomSheetBoilerplate onClickAway={toggleOpen}>
        <SheetContent>
          {
            iconMap.map((item, idx) => (
              <ShareIcon 
                key={`shareicon-${idx}`}
                style={{background: item.color}}
              >
                <FontAwesomeIcon icon={item.icon}/>
              </ShareIcon>
            ))
          }
        </SheetContent>
      </BottomSheetBoilerplate>
    </BottomSheet>
  );
};

const SheetContent = styled.div`
  height: 20vh;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
`

// credits to: https://codepen.io/asheabbott/pen/GoMrzW
const ShareIcon = styled.a`
  text-align: center;
  height: 50px;
  line-height:50px;
  width: 50px;
  display: inline-block;
  margin: 8px;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  opacity: 0.75;
  transition: opacity 0.15s linear;
  &:hover {
    opacity: 1;
  }
  & i {
  	position: relative;
  	top: 50%;
  	transform: translateY(-50%);
  }
`