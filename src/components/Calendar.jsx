import { useState, useEffect } from "react";

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
        i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "nextmonth";
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
      <div className="calendar">
        <div className="calendar-head">
          <div className="calendar-title">{`${showMonth} ${showDate}, ${showYear}`}</div>
          <div className="controller">
            <button className="prev-month-btn" onClick={prevMonth}>
              &lt;
            </button>
            <button className="this-month-btn" onClick={thisMonth}>
              today
            </button>
            <button className="next-month-btn" onClick={nextMonth}>
              &gt;
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
