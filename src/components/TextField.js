import React from 'react';
import PropTypes from 'prop-types';

class TextField extends React.Component {
  render() {
    const {
      value,
      onChange,
      onFocus,
      onBlur,
      label,
      placeholder,
      type,
      multiline,
      classes = defaultClasses
    } = this.props;

    const { root, input, labelStyle } = classes;
    const _renderTextInput = () => {
      if (!multiline) {
        return (
          <div className={root}>
            <label className={labelStyle}>{label}</label>
            <input
              className={input}
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
          <div className={root}>
            <label className={labelStyle}>{label}</label>
            <textarea
              className={input}
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

const defaultClasses = {
  root: 'textfield__root',
  input: 'textfield__input',
  labelStyle: 'textfield__labelStyle'
};

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
