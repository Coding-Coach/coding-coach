import React from 'react';
import Button from 'components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { t } from '@lingui/macro';
import { I18n } from '@lingui/react';

const styles = {
  hide: {
    bottom: 20,
    right: -65,
  },
  show: {
    right: 20,
  },
};

class ScrollTopButton extends React.Component {
  state = { scrollTopClass: '' };

  componentDidMount() {
    this.scrollHandler();
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    this.setState({
      scrollToTopClass: window.pageYOffset > window.innerHeight / 4 ? 'opacity-100' : '',
    });
  };

  clickHandler = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  render() {
    const { scrollToTopClass } = this.state;
    return (
      <I18n>
        {({ i18n }) => (
          <div
            aria-label={i18n._(t`common.scrollToTop`)}
            tabIndex={scrollToTopClass ? 0 : -1}
            className={`transition-slow fixed cursor-pointer opacity-0 z-10 ${scrollToTopClass}`}
            style={{
              ...styles.hide,
              ...(scrollToTopClass && styles.show),
            }}
          >
            <Button onClick={this.clickHandler} onKeyPress={this.clickHandler}>
              <FontAwesomeIcon icon={faArrowUp} size="2x" />
            </Button>
          </div>
        )}
      </I18n>
    );
  }
}
export default ScrollTopButton;
