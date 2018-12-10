import React from 'react';
import { any, number, string, object, func } from 'prop-types';

export default function Icon({
  children,
  className,
  color,
  title,
  height,
  style,
  width,
  vectors,
  viewBox,
  onClick,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      aria-labelledby="title"
      className={className}
      style={style}
      onClick={onClick}
    >
      <title id="title">{title}</title>
      {vectors && <path fill={color} d={vectors} />}
      {children}
    </svg>
  );
}

Icon.propTypes = {
  children: any,
  className: string,
  color: string,
  title: string,
  height: number,
  style: object,
  vectors: string,
  viewBox: string,
  width: number,
  onClick: func,
};
