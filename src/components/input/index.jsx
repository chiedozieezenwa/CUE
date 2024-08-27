// import React from 'react';
// import styles from './styles.module.css';  // Import your styles
// import { calender } from '../../assets';

// // eslint-disable-next-line react/display-name
// export const CustomDateInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
//   <div className={styles.customDateInput} onClick={onClick} ref={ref}>
//     {!value && (
//       <img src={calender} alt="calendar" className={styles.dateIcon} />
//     )}
//     { value || placeholder}
//   </div>
// ));

    
    
import React from 'react';
import styles from './styles.module.css';
import { calender } from '../../assets';

export const CustomDateInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <div className={styles.customDateInput} id={styles.customInput} onClick={onClick} ref={ref}>
    {!value && (
      
      <img src={calender} alt="calendar" className={styles.dateIcon} id={styles.inputIcon} />
    )}
    <span id={styles.placeholderText} className={!value ? styles.placeholderText : ''}>
      {value || placeholder}
    </span>
  </div>
));


