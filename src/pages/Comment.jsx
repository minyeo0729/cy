/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import CalendarV from "../components/CalendarV";
import Test from "../components/Test";

const CommentContainer = styled.div`
 
`;

const Comment = () => {
  return (
    <>
      <CommentContainer>
        {/* <CalendarV /> */}
        <Test />
      </CommentContainer>
    </>
  );
};

export default Comment;
