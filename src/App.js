import './App.css';
import AgeForm from './components/AgeForm.js'
import AgeCalculation from './components/AgeCalculation.js'
import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState({
    days: null,
    months: null,
    years: null,
  })

  function mapMonthDays(month, year) {
    if (month === 2) {
      return year % 4 === 0 ? 29 : 28;
    }
    if([4, 6, 9, 11].includes(month)) {
      return 30;
    }
    return 31;
  }

  function calculateAge(date) {
    const now = new Date();

    let yearsCount = 0;
    let monthsCount = 0;
    let daysCount = 0;

    let repDay = 0;
    let repMonth = 0;

    if(now.getDate() >= date.getDate()) {
      daysCount = now.getDate() - date.getDate();
    } else {
      daysCount = mapMonthDays(date.getMonth() + 1, date.getFullYear()) - date.getDate() + now.getDate();
      repDay = 1;
    }

    if(now.getMonth() >= date.getMonth()) {
      monthsCount = now.getMonth() - date.getMonth() - repDay;
    } else {
      monthsCount = 12 - date.getMonth() + now.getMonth() - repDay;
      repMonth = 1;
    }

    yearsCount = now.getFullYear() - date.getFullYear() - repMonth;

    setAge({
      ...age,
      days: daysCount,
      months: monthsCount,
      years: yearsCount,
    })
  }

  return (
    <div className="App">
      <AgeForm onSubmitButton={calculateAge} />
      <AgeCalculation days={age.days} months={age.months} years={age.years}/>
    </div>
  );
}

export default App;
