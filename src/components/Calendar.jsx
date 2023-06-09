import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
const CalendarContainer = styled.div`
  padding: 20rem;
  border: 1rem solid #ccc;
  border-radius: 10rem;
  max-width: 250rem;
  width: 50%;
  
  .calendar-head {
    padding: 0 10rem 20rem; 
    margin-bottom: 20rem; 
    position: relative;
    font-size: 17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
    }
  }
 
  .controller button {
    background: #E7CFCD;
    margin-right: 10rem;
    border-radius: 5rem;
    height: 100%;
    color: #Fff;
    padding: 5rem 2rem;
    &:last-of-type{
      margin-right: 0
    }
  }

  .controller button svg {
    display: block; 
    width: 20rem;
  }

  .calendar-body {
    padding: 0 10rem;
    margin-top: 10rem;
  }

  .days {
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-size: 12rem;
    justify-items: center;
    font-weight: bold;
  }

  .day {
    &:nth-child(7n) {
      color: #396ee2;
    }
    &:nth-child(7n + 1){
      color: #d13e3e;
    }
  }
  
  .dates {
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-size: 12rem;
    justify-items: center;
  }

  .date{
    padding: 8rem 10rem;
    display: inline-block;
    border-radius: 5rem;
    
    &:has(.today-date){
      background: #E7CFCD;
      color: #Fff;
    }

    &:nth-child(7n){
      olor: #396ee2;
    }

    &:nth-child(7n + 1){
      color: #d13e3e;
    }
  }

  .date .next-month {
    opacity: 0.3;
  }

}`;

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    renderCalendar();
  }, []);

  const renderCalendar = () => {
    const showYear = date.getFullYear();
    const showMonth = date.toLocaleString("en-US", { month: "short" });
    const showDate = date.getDate();

    const prevLast = new Date(showYear, date.getMonth(), 0); // Last day of the previous month
    const thisLast = new Date(showYear, date.getMonth() + 1, 0); // Last day of the current month

    const PLDate = prevLast.getDate(); // Date of the last day of the previous month
    const PLDay = prevLast.getDay(); // Day of the last day of the previous month
    const TLDate = thisLast.getDate(); // Date of the last day of the current month
    const TLDay = thisLast.getDay(); // Day of the last day of the current month

    const prevDate = [];
    const nextDate = [];
    const thisDate = [...Array(TLDate + 1).keys()].slice(1);

    if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDate.unshift(PLDate - i);
      }
    }

    for (let i = 1; i < 7 - TLDay; i++) {
      nextDate.push(i);
    }

    const dates = prevDate.concat(thisDate, nextDate);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    const today = new Date();

    const renderedDates = dates.map((date, i) => {
      const condition =
        i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "next-month";
      const isToday =
        date === today.getDate() &&
        showMonth === today.toLocaleString("en-US", { month: "short" }) &&
        showYear === today.getFullYear();
      const className = `${condition} ${isToday ? "today-date" : ""}`;
      return (
        <div className="date" key={i}>
          <span className={className}>{date}</span>
        </div>
      );
    });

    return (
      <CalendarContainer>
        <div className="calendar-head">
          <div className="calendar-title">
            {`${showMonth} ${showDate}, ${showYear}`}

            <button className="this-month-btn" onClick={thisMonth}>
              🧡
            </button>
          </div>
          <div className="controller">
            <button className="prev-month-btn" onClick={prevMonth}>
            <FaAngleLeft />
            </button>
            <button className="next-month-btn" onClick={nextMonth}>
            <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="days">
            <div className="day">S</div>
            <div className="day">M</div>
            <div className="day">T</div>
            <div className="day">W</div>
            <div className="day">T</div>
            <div className="day">F</div>
            <div className="day">S</div>
          </div>
          <div className="dates">{renderedDates}</div>
        </div>
      </CalendarContainer>
    );
  };

  const prevMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(1);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const nextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(1);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const thisMonth = () => {
    setDate(new Date());
  };

  return renderCalendar();
};

export default Calendar;
