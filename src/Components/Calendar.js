import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker selected={date} onChange={(date) => setDate(date)} />;
};

export default Calendar;
