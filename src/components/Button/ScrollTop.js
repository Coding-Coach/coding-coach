import React from 'react';

import ArrowUp from '../Icon/ArrowUp';
import Button from './index';

const styles = {
  hide: {
    bottom: 90,
    right: -65,
  },
  show: {
    right: 15,
  },
};

export default class ScrollTop extends React.Component {
  state = {
    scrollTopClass: '',
  };

  componentDidMount() {
    this.scrollHandler();
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    const scrollToTopClass = window.pageYOffset > window.innerHeight / 4 ? 'opacity-100' : '';

    if (scrollToTopClass !== this.state.scrollToTopClass) {
      this.setState({
        scrollToTopClass,
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  render() {
    const { scrollToTopClass } = this.state;

    return (
      <div
        aria-label="Scroll to top"
        tabIndex={scrollToTopClass ? 0 : -1}
        className={`transition-slow fixed cursor-pointer opacity-0 z-10 ${scrollToTopClass}`}
        style={{
          ...styles.hide,
          ...(scrollToTopClass && styles.show),
        }}
      >
        <Button onClick={this.scrollToTop} onKeyPress={this.scrollToTop} className="px-3">
          <ArrowUp width={27} height={28} color="currentColor" />
        </Button>
      </div>
    );
  }
}
