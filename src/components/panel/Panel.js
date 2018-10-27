import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { node, func, bool, object } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/panel.scss';
import Header from './PanelHeader';
import Content from './PanelContent';
import Footer from './PanelFooter';

const cx = classNames.bind(styles);

/**
 * Usage:
 *
 * const classes = {
 *    root: styles.classNameForRootElement,
 *    body: styles.classForTheBodyContainer,
 * };
 * const headerClasses = {
 *    title: styles.classForTheTitle
 * };
 *
 * const footerClasses = {
 *    footer: 'custom-class-for-the-footer-container'
 * };
 *
 *   <Panel trigger={<Button>Open Me</Button>} closable={false} onClose={onClose} classes={classes}>
 *     <Panel.Header classes={headerClasses}>Some title here</Panel.Header>
 *     <Panel.Content>
 *       <img src="something.png" />
 *       <div>
 *         <p>We should be able to add anything as the content<.p>
 *       </div>
 *     </Panel.Content>
 *     <Panel.Footer classes={footerClasses}>
 *       <CustomFooterComponent />
 *     </Panel.Footer>
 *   </Panel>
 */

export default class Panel extends React.Component {
  static propTypes = {
    trigger: node,
    onClose: func,
    closable: bool,
    open: bool,
    modal: bool,
    classes: object,
    closeAction: node,
  };

  static ESCAPE_KEY = 27;

  static CLASS_OVERFLOW_HIDDEN = 'u-overflowHidden';

  static defaultProps = {
    closable: false,
    modal: false,
    classes: {},
    open: false,
  };

  static Header = Header;

  static Content = Content;

  static Footer = Footer;

  constructor(props) {
    super(props);
    this.state = { ...Panel.defaultProps };
    this.el = document.createElement('div');
  }

  componentWillReceiveProps({ open }) {
    this.setState({ open });
  }

  componentDidMount() {
    // attach keydown event listener on document when the component is mounted
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    // remove the attached keydown event listener when the component is unmounted
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleTriggerClick = (e) => {
    e.preventDefault();
    this.setState({ open: true });
    document.body.appendChild(this.el);
  };

  handleEscape = (e) => {
    if (!this.props.modal) {
      return;
    }
    if (e.keyCode === Panel.ESCAPE_KEY) {
      this.close(e);
    }
  };

  handleCloseIconClick = (e) => {
    this.close(e);
  };

  close(event) {
    const { onClose } = this.props;
    onClose && onClose(event);
    this.setState({ open: false });
    document.body.classList.remove(Panel.CLASS_OVERFLOW_HIDDEN);

    this.el.parentElement.removeChild(this.el);
  }

  renderCloseIcon() {
    const { closable } = this.props;
    return closable ? <i className={styles.closeIcon} onClick={this.handleCloseIconClick} /> : null;
  }

  render() {
    const { trigger, children, modal, classes, closeAction } = this.props;
    const { open } = this.state;
    const rootClasses = cx({
      modal: modal,
      popup: !modal,
      [classes.root]: classes.root,
    });

    const mainSectionClasses = cx({
      modalMain: modal,
      PanelMain: !modal,
      [classes.body]: classes.body,
    });

    // Class to make the body not scrollable
    modal && open && document.body.classList.add(Panel.CLASS_OVERFLOW_HIDDEN);

    return [
      modal && trigger
        ? cloneElement(trigger, { onClick: this.handleTriggerClick, key: 'trigger' })
        : null,

      modal && open
        ? ReactDOM.createPortal(
            <div className={rootClasses} key="modal">
              <section className={mainSectionClasses}>
                {this.renderCloseIcon()}
                {children}
                {closeAction ? (
                  <Footer pullRight={true}>
                    {cloneElement(closeAction, { onClick: this.handleCloseIconClick })}
                  </Footer>
                ) : null}
              </section>
            </div>,
            this.el,
          )
        : null,

      !modal ? (
        <section className={mainSectionClasses} key="panel">
          {children}
        </section>
      ) : null,
    ];
  }
}
