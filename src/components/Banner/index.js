import React, { PureComponent } from 'react';
import { bool, func } from 'prop-types';
import classNames from 'classnames';

import CloseIcon from '../Icon/Close';

export default class Banner extends PureComponent {
  static propTypes = {
    closable: bool,
    onClose: func,
  };

  render() {
    const { children, closable, onClose } = this.props;

    return (
      <section className="fixed bottom-0 py-4 w-full bg-primary-lighter" style={{ opacity: 0.9 }}>
        <div className="container flex flex-row">
          <div className={classNames('flex-1', { 'pr-4': closable })}>
            {children}
          </div>
          { closable &&
            <CloseIcon onClick={onClose} width={16} height={16} className="fill-current text-secondary-dark cursor-pointer hover:text-primary-light" ariaLabelledby="Close icon"/>
          }
        </div>
      </section>
    );
  }
}
