import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionDirection.scss';

function getClassesByDirection({ direction }) {
  if (direction === 'left') {
    return styles.hasLeftDirection;
  } else if (direction === 'right') {
    return styles.hasRightDirection;
  }
}

const SectionDirection = ({ direction, children }) => (
  <div className={[styles.sectionDirection, getClassesByDirection({ direction })].join(' ')}>
    {children}
  </div>
);

SectionDirection.propTypes = {
  // From where the first element will be rendered
  direction: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
};

SectionDirection.defaultProps = {
  direction: 'left',
};

export default SectionDirection;
