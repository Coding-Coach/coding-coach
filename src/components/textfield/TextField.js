import React from 'react';
import classnames from 'classnames';
import { func, string } from 'prop-types';

export default function TextField({ label, name, onChange, type, value, error }) {
  const inputClassNames = classnames(
    `
      block
      border rounded-sm
      leading-tight
      border-secondary-lighter bg-white
      w-full p-2
      focus:outline-none focus:border-primary focus:text-primary
    `,
    {
      'border-danger': !!error,
    },
  );

  return (
    <div className="mb-4 text-secondary-light focus-within:text-primary">
      {label && (
        <label className={classnames('block mb-1', { 'text-danger': !!error })} htmlFor={name}>
          {label}
        </label>
      )}

      <input
        type={type}
        className={inputClassNames}
        name={name}
        value={value}
        onChange={onChange}
      />

      {!!error && <div className="mt-1 text-danger text-sm">{error}</div>}
    </div>
  );
}

TextField.propTypes = {
  label: string,
  name: string,
  onChange: func,
  type: string,
  value: string,
  error: string,
};

TextField.defaultProps = {
  type: 'text',
};
