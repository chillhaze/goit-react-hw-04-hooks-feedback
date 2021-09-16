import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={css.container}>
    <h2 className={css.title}>{title}</h2>
    <div className={css.wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:{' '}
        <span
          className={css.percentage}
          style={
            positivePercentage <= 49
              ? { color: 'rgb(244, 67, 54)' }
              : { color: 'rgb(33 217 95)' }
          }
        >
          {positivePercentage}%
        </span>
      </p>
    </div>
  </div>
);

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
