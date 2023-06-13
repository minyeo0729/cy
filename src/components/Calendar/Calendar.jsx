import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { gsap } from "gsap";
import styles from './Calendar.module.css';
const Calendar = () => {
  const [date, setDate] = useState(new Date());

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
    const renderedDates = dates.map((date, i) => {
      const condition =
        i >= firstDateIndex && i < lastDateIndex + 1 ? "" : styles.nextMonth;
      const isToday =
        date === today.getDate() &&
        showMonth === today.toLocaleString("en-US", { month: "short" }) &&
        showYear === today.getFullYear();
      const className = `${condition} ${isToday ? styles.todayDate : ""}`;
      return (
        <div className={styles.date} key={i}>
          <span className={className}>{date}</span>
        </div>
      );
    });

    return (
      <div className={styles.calendar}>
        <div className={styles.head}>
          <div>
            {`${showMonth} ${showDate}, ${showYear}`}

            <button className="this-month-btn" onClick={thisMonth}>
              🧡
            </button>
          </div> 
          <div className={styles.controller}>
            <button onClick={prevMonth}>
              <span className={styles.transition}></span>
              <span className={styles.gradient}></span>
              <span className={styles.label}><FaAngleLeft /></span>
            </button>
            <button onClick={nextMonth}>
              <span className={styles.transition}></span>
              <span className={styles.gradient}></span>
              <span className={styles.label}><FaAngleRight /></span>
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.days}>
            <div className={styles.day}>S</div>
            <div className={styles.day}>M</div>
            <div className={styles.day}>T</div>
            <div className={styles.day}>W</div>
            <div className={styles.day}>T</div>
            <div className={styles.day}>F</div>
            <div className={styles.day}>S</div>
          </div>
          <div className={styles.dates}>{renderedDates}</div>
        </div>
      </div>
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
