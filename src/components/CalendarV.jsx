import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { gsap } from "gsap";
import styled from "styled-components";


const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  row-gap: 20rem;
  height: 100vh;
  max-height: 370rem;
`;

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-bottom: 1rem solid #ccc;
  .title {
    cursor: pointer;
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;

  .calendar {
    position: relative;
    max-width: 200rem;
    padding: 20rem;
    margin: 20rem;
    border-radius: 5rem;
    border: 1rem solid var(--border);

    @media (max-width: 540px) {
      padding: 10rem;
    }
  }

  .nextPrev {
      position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    
    @media (max-width: 540px) {
      position: relative;
      justify-content: end;
      margin-top: 10rem;
    }
    button {
        color: var(--border);
        pointer-events: auto;
      }
  }

 

  .dates {
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-size: 10rem;
    justify-items: center;
    font-weight: bold;
  }
  .date {
    padding: 4rem 5rem;
    display: inline-block;
    border-radius: 5rem;
  }
  .date:nth-child(7n) {
    color: var(--deepblue);
  }
  .date:nth-child(7n + 1) {
    color: var(--main);
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    font-size: 10rem;
    row-gap: 5rem;
  }
  .day span {
    padding: 4rem 5rem;
    display: inline-block;
    border-radius: 5rem;
    cursor: pointer;
  }
  .day:has(.todayDate) {
    background: var(--bg);
    color: var(--white);
  }
  .days .nextMonth {
    opacity: 0.3;
  }
  .day:nth-child(7n) {
    color: var(--deepblue);
  }
  .day:nth-child(7n + 1) {
    color: var(--main);
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
`;


const CalendarV = () => {
  const [date, setDate] = useState(new Date());
  const [titledate, setTitleDate] = useState(new Date());
  
  useEffect(() => {
    renderCalendar();
    gsap.fromTo(
      ".this-month-btn",
      { scale: 1 },
      { scale: 1.2, repeat: -1, duration: 1, yoyo: true, ease: "bounce" }
    );
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

    //이전 달의 마지막 날이 31일이고 마지막 요일이 수요일(3)라면, prevDate 배열은 [31, 30, 29, 28]과 같이 역순으로 요소가 추가
    if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDate.unshift(PLDate - i);
      }
    }
    //현재 달의 마지막 날이 28일이고 마지막 요일이 수요일(3)라면, nextDate 배열에 [1, 2, 3, 4]와 같이 추가 
    for (let i = 1; i < 7 - TLDay; i++) {
      nextDate.push(i);
    }

    const dates = prevDate.concat(thisDate, nextDate);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    const today = new Date();
    const todayYear = titledate.getFullYear();
    const todayMonth = titledate.toLocaleString("en-US", { month: "short" });
    const todayDate = titledate.getDate();

  
    const renderedDates = dates.map((date, i) => {
      const condition =
        i >= firstDateIndex && i < lastDateIndex + 1 ? "" : "nextMonth";


      const isToday =
        date === titledate.getDate() &&
        showMonth === titledate.toLocaleString("en-US", { month: "short" }) &&
        showYear === titledate.getFullYear();

      const className = `${condition} ${isToday ? "todayDate" : ""}`;

      return (
        <div className="day" key={i} >
          <span className={className}>{date}</span>
        </div>
      );
    });

    return (
        
      <GridContainer>
        <TextContainer>
            <div className="title" onClick={thisMonth} >
              {`${todayMonth} ${todayDate}, ${todayYear}`}
              <button className="this-month-btn">
                🧡
              </button>
            </div>
          <CalendarContainer>
            <div className="calendar">
              <div className="dates">
                <div className="date">S</div>
                <div className="date">M</div>
                <div className="date">T</div>
                <div className="date">W</div>
                <div className="date">T</div>
                <div className="date">F</div>
                <div className="date">S</div>
              </div>
              <div className="days">{renderedDates}</div>
              <div className="nextPrev">
                <button onClick={prevMonth}>
                  <FaAngleLeft />
                </button>
                <button onClick={nextMonth}>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </CalendarContainer>
        </TextContainer>

        <ListContainer>
            <div>hello</div>
        </ListContainer>
      </GridContainer>
    );
  };

  //setMonth is js built-in method
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
    console.log('thismonth')
    // setDate(new Date());
    console.log(date)
  };
  const changeToday = (clickedDate) => {
    console.log('test')
    setTitleDate((prevDate)=>{
        const newDate = new Date(prevDate);
        console.log(newDate)
        // newDate.setMonth(clickedMonth);
        newDate.setDate(clickedDate);
        return newDate;
    })

    }

  return renderCalendar();
};

export default CalendarV;
