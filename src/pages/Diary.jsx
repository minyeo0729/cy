/* eslint-disable no-unused-vars */
import React from "react";
import Calendar from "../components/Calendar";

const Diary = () => {
  return (
    <>
        <div className="diary-inner">
            <Calendar />

            <div className="diary-text">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </>
  );
};

export default Diary;
