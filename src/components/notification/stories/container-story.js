import React from 'react';

const Container = ({ title, children }) => (
  <React.Fragment>
    <h1 class="text-left mb-5">{title}</h1>
    <div class="w-full h-full p-5 bg-secondary-lightest">
      <div style={{ maxWidth: 500 }}>
        {React.Children.map(children, (child) => (
          <div className="my-10">{child}</div>
        ))}
      </div>
    </div>
  </React.Fragment>
);

export default Container;
