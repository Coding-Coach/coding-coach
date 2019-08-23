import React from 'react';
import { any, func, number, string, object } from 'prop-types';

export default function Icon(props) {
  const {
    children,
    className,
    color,
    title,
    height,
    onClick,
    style,
    width,
    vectors,
    viewBox,
  } = props;

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
  onClick: func,
  style: object,
  vectors: string,
  viewBox: string,
  width: number,
};
