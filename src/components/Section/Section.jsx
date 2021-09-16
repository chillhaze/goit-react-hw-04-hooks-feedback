import PropTypes from 'prop-types';
import { BiCoffeeTogo } from 'react-icons/bi';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.Section}>
      {title && (
        <h2 className={css.title}>
          {title}
          <BiCoffeeTogo className={css.logo} />
        </h2>
      )}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
