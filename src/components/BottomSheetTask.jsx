import React from "react";
import styled from "styled-components";
import { BottomSheet, BottomSheetBoilerplate } from "./common-components";

export const BottomSheetTask = ({ isOpen, toggleOpen, task }) => {
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={toggleOpen}
      snapPoints={[0.20, 0]}
      detent="content-height"
    >
      <BottomSheetBoilerplate onClickAway={toggleOpen}>
        <SheetContent>{task}</SheetContent>
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