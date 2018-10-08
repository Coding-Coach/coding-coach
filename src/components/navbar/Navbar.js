import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import { slide as Menu } from 'react-burger-menu';
import styles from './navbar.scss';
import './burgerMenu.scss';
const Navbar = ({ t }) => {
  const BurgerMenustyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#21785b',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#979797',
    },
    bmMenu: {
      background: '#afe9d6',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'block',
      padding: '1.2em',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };
  const renderDesktop = (
    <nav className={styles.navigationBar}>
      <div className={styles.inner}>
        <a href="#about" className={styles.navLinks}>
          {t('About')}
        </a>
        <a href="#mission" className={styles.navLinks}>
          {t('Mission')}
        </a>
        <a href="#contact" className={styles.navLinks}>
          {t('Contact')}
        </a>
      </div>
    </nav>
  );
  const renderMobile = (
    <div>
      <Menu isOpen={false}>
        <a href="#about" className={styles.navLinks}>
          {t('About')}
        </a>
        <a href="#mission" className={styles.navLinks}>
          {t('Mission')}
        </a>
        <a href="#contact" className={styles.navLinks}>
          {t('Contact')}
        </a>
      </Menu>
    </div>
  );
  const renderComponent = window.innerWidth > 600 ? renderDesktop : renderMobile;

  return <div>{renderComponent}</div>;
};

export default translate('translations')(Navbar);
