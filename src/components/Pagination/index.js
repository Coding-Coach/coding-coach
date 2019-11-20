import React from 'react';

export default function Pagination({ totalPages, current, setCurrent }) {
  if (totalPages === 1) {
    return null;
  }

  const containerStyle = {
    display: 'inline-block',
    marginBottom: '3px',
    textAlign: 'right',
    width: '100%',
  };
  let pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(<PageNumber key={i} number={i} selected={i === current} setCurrent={setCurrent} />);
  }

  return (
    <div style={containerStyle}>
      {pageNumbers.map(pageNumber => pageNumber)}
    </div>
  );
}

function PageNumber({ number, selected, setCurrent }) {
  const style = {
    borderRadius: '3px',
    display: 'inline-block',
    fontSize: '16px',
    width: '25px',
    textAlign: 'center',
  };
  let className = "text-dark-secondary cursor-pointer";

  if (selected) {
    className = "bg-primary text-white cursor-pointer";
  }

  return (
    <div key={number}
         className={className}
         style={style}
         onClick={() => setCurrent(number)}>
      {number}
    </div>
  );
}
