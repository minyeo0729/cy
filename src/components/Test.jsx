import React from 'react';

class Calendar extends React.Component {
  state = {
    date: new Date()
  };
  goToPreviousMonth = () => {
    const { date } = this.state;
    this.setState({
      date: new Date(date.getFullYear(), date.getMonth() - 1)
    });
  };

  goToNextMonth = () => {
    const { date } = this.state;
    this.setState({
      date: new Date(date.getFullYear(), date.getMonth() + 1)
    });
  };
  render() {
    const { date } = this.state;
    const year = date.getFullYear();
    const month = date.getMonth();
    //month + 1 == next month so .getDate() will be last date on the month 
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    //ex) it's June, junt 1st is Thursday in 2023, thursday index is 4. the firstDay returns 4 
    const firstDay = new Date(year, month, 1).getDay();
    
    //make array of 'days' which contains each days of each month 
    //

    const days = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

    return (
      <div>
        <div>
          <button onClick={this.goToPreviousMonth}>Previous Month</button>
          <h2>{date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={this.goToNextMonth}>Next Month</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(days.length / 7) }, (_, i) => i * 7).map((weekStart, index) => (
              <tr key={index}>
                {days.slice(weekStart, weekStart + 7).map((day, index) => (
                  <td key={index}>{day}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
