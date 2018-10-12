import React from 'react';
import { bool, string, func,oneOf,object } from 'prop-types';
import styles from './textfield.scss';
import classNames from 'classnames';


const TextField = ({value, onChange, onFocus, onBlur, label, placeholder, type="text", multiline, } )=>{

   if(!multiline){
     return(
      <div className={classNames(styles.defaultRoot)}>
        <label className={classNames(styles.defaultLabelStyle)}>{label}</label>
        <input
          className={classNames(styles.defaultInputStyle)}
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
      return (<div className={classNames(styles.defaultRoot)}>
        <label className={classNames(styles.defaultLabelStyle)}>{label}</label>
        <textarea
          className={classNames(styles.defaultTextAreaStyle)}
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
    type:oneOf(['text','password','email','color','date','datetime-local','month','number','range','search','tel','time','url','week']),
    multiline:bool,
  };

export default TextField;
