import React from 'react';
import { func, string } from 'prop-types';

export default function TextField({ label, name, onChange, type, value }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-secondary-light mb-1" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        className="block border border-secondary-lighter bg-white w-full p-2 rounded-sm focus:outline-none focus:border focus:border-primary"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

TextField.propTypes = {
  label: string,
  name: string,
  onChange: func,
  type: string,
  value: string,
};

TextField.defaultProps = {
  type: 'text',
};
