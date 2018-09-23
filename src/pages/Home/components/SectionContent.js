import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionContent.scss';

const SectionContent = ({ title, description, isColored, textAlign, children }) => (
  <div
    className={[
      styles.sectionContent,
      stylesByColored(isColored),
      stylesByTextAlign(textAlign),
    ].join(' ')}
  >
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
    <p className={styles.description}>{description}</p>
    {children}
  </div>
);

SectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  // It makes the title have the color: MainColor or Grey
  isColored: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
};

SectionContent.defaultProps = {
  isColored: false,
  textAlign: 'left',
};

export default SectionContent;

function stylesByColored(isColored) {
  return isColored ? styles.isColored : '';
}

function stylesByTextAlign(textAlign) {
  if (textAlign === 'left') {
    return styles.isLeftAligned;
  } else if (textAlign === 'right') {
    return styles.isRightAligned;
  }
}
