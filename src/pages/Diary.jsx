/* eslint-disable no-unused-vars */
import React from "react";
import Calendar from "../components/Calendar/Calendar";
import styled from "styled-components";
import Write from "../components/Write";

const DiaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: stretch;
  gap: 20rem;
  height: 100%;

  @media (max-width: 1023px) {
    overflow-y: scroll;
    overflow-x: hidden;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Diary = () => {
  return (
    <>
      <DiaryContainer>
        <Calendar />
        <Write />
      </DiaryContainer>
    </>
  );
};

export default Diary;
