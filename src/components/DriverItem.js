import React from 'react';
import '../style/DriverItem.css';

const DriverItem = ({ driver }) => {
  const calculateTotalMinutes = activities => {
    return activities.reduce((total, activity) => total + activity.duration, 0);
  };

  const activityByDay = (day) => {
    return driver.activities.some(activity => new Date(activity.date).getDay() === day);
  };

  return (
    <div className="driver-item">
      <h3>{driver.name}</h3>
      <p>Registration: {driver.registration}</p>
      <p>Total Minutes: {calculateTotalMinutes(driver.activities)}</p>
      <div className="week-activities">
        {[1, 2, 3, 4, 5, 6, 0].map(day => (
          <div key={day} className={`day-box ${activityByDay(day) ? 'active' : ''}`}></div>
        ))}
      </div>
    </div>
  );
};

export default DriverItem;
