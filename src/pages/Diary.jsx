/* eslint-disable no-unused-vars */
import React from "react";
import Calendar from "../components/Calendar";

import styled from "styled-components";

const DiaryContainer = styled.div`
  display: flex;
  gap: 20rem;

  .diary-text {
    width: 50%;
  }
  textarea {
    width: 100%;
  }
`;

const Diary = () => {
  return (
    <>
      <DiaryContainer>
        <Calendar />

        <div className="diary-text">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </DiaryContainer>
    </>
  );
};

export default Diary;
