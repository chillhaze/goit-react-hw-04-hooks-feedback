import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>

      <div className={css.btn__wrapper}>
        {options.map(option => (
          <button
            className={css.btn}
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {capitalizeFirstLetter(option)}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
  title: PropTypes.string,
};
