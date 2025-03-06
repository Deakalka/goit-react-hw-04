import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message = "An error occurred while fetching data." }) => {
  return (
    <div className={css.error}>
      <FiAlertCircle size={20} />
      {message}
    </div>
  );
};

export default ErrorMessage;