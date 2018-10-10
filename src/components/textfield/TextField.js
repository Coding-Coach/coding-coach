import React from 'react';
import PropTypes from 'prop-types';
import styles from './textfield.scss';

class TextField extends React.Component {
  render() {
    const { value, onChange, onFocus, onBlur, label, placeholder, type, multiline } = this.props;

    const _renderTextInput = () => {
      if (!multiline) {
        return (
          <div className={styles.root}>
            <label className={styles.labelStyle}>{label}</label>
            <input
              className={styles.inputStyle}
              label={label}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              type={type}
              value={value}
              placeholder={placeholder}
            />
          </div>
        );
      } else {
        return (
          <div className={styles.root}>
            <label className={styles.labelStyle}>{label}</label>
            <textarea
              className={styles.textAreaStyle}
              label={label}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              type={type}
              value={value}
              placeholder={placeholder}
            />
          </div>
        );
      }
    };
    return _renderTextInput();
  }
}

TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  multiline: PropTypes.bool
};

export default TextField;
