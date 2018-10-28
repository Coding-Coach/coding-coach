import React, { cloneElement } from 'react';
import styles from './assets/panel.scss';

/**
 * Usage:
 *
 *   <Panel>
 *     <PanelHeader>Some title here</Panel.Header>
 *     <PanelContent>
 *       <img src="something.png" />
 *       <div>
 *         <p>We should be able to add anything as the content<.p>
 *       </div>
 *     </PanelContent>
 *     <PanelFooter>
 *        <small>you have x seconds to accept</small>
 *        <button>Click me!</button>
 *     </PanelFooter>
 *   </Panel>
 */
export function Panel({ children }) {
  return <div className={styles.panel}>{children}</div>;
}

export function PanelHeader({ children }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{children}</h2>
    </header>
  );
}

export function PanelContent({ children }) {
  return <div className={styles.content}>{children}</div>;
}

export function PanelFooter({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}
