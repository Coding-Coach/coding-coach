import React from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const HomeSection = ({ align, id, title, text, media, children }) => {
  const isRight = align === 'right';

  return (
    <section id={id} className={classNames('py-32', { 'bg-primary-lighter': !isRight })}>
      <div
        className={classNames('container flex', {
          'flex-row-reverse': isRight,
        })}
      >
        <div
          className={classNames('flex-1', {
            'pl-8': isRight,
            'pr-8': !isRight,
          })}
        >
          <h2
            className={classNames(
              `text-primary-light text-5xl font-titles font-normal uppercase leading-tight text-${align}`,
              {
                'text-secondary-dark': !isRight,
              },
            )}
          >
            {title}
          </h2>
          <p className={`text-lg text-secondary-dark leading-normal font-content text-${align}`}>
            {text}
          </p>
          {children}
        </div>
        <div className="flex items-center w-2/5">{media}</div>
      </div>
    </section>
  );
};

HomeSection.propTypes = {
  align: oneOf(['right', 'left']).isRequired,
  id: string.isRequired,
  title: string.isRequired,
  text: string,
  media: node.isRequired,
  children: node,
};

export default HomeSection;
