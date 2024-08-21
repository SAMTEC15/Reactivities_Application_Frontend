import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onChange(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      placeholderText="Set date and time" 
      dateFormat="MMMM d, yyyy h:mm aa"
      timeCaption="time"
    />
  );
};

export default DateTimePicker;
