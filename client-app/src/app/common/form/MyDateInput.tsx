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

// import React from 'react';

// interface MyDateInputProps {
//   selectedDate: Date | null;
//   onChange: (date: Date | null) => void;
// }

// const MyDateInput: React.FC<MyDateInputProps> = ({ selectedDate, onChange }) => {
//   return (
//     <input
//       type="date"
//       value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
//       onChange={(e) => {
//         const newDate = e.target.value ? new Date(e.target.value) : null;
//         onChange(newDate);
//       }}
//     />
//   );
// };

// export default MyDateInput;
