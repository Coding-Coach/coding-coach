import React from 'react';
import { bool, string, func,oneOf } from 'prop-types';
import styles from './textfield.scss';

const TextField = ({value, onChange, onFocus, onBlur, label, placeholder, type="text", multiline })=>{

   if(!multiline){
     return(
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
    }else{
      return (<div className={styles.root}>
        <label className={styles.labelStyle}>{label}</label>
        <textarea
          className={styles.textAreaStyle}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          placeholder={placeholder}
        />
      </div>);
    }

  };
TextField.propTypes = {
    onChange:func,
    value:string,
    onBlur:func,
    onFocus:func,
    placeholder:string,
    type:oneOf(['text','password','email']),
    multiline:bool,
  };

export default TextField;
