import React from 'react';
import { bool } from 'prop-types';

/**
 * Usage:
 *
 *   <Panel>
 *     <PanelHeader>Some title here</PanelHeader>
 *     <PanelContent>
 *       <img src="something.png" />
 *       <div>
 *         <p>We should be able to add anything as the content</p>
 *       </div>
 *     </PanelContent>
 *     <PanelFooter>
 *        <small>you have x seconds to accept</small>
 *        <button>Click me!</button>
 *     </PanelFooter>
 *   </Panel>
 */

export function Panel({ children, floating }) {
  let panel;

  if (floating) {
    panel = (
      <div className="w-full h-full bg-white rounded-default rounded-round shadow-panel">
        {children}
      </div>
    );
  } else {
    panel = <div className="w-full h-full bg-white rounded-round">{children}</div>;
  }

  return panel;
}

Panel.propTypes = {
  floating: bool,
};

Panel.defaultProps = {
  floating: false,
};

export function PanelHeader({ children }) {
  return (
    <header className="px-6 pt-6 pb-5 border-b border-secondary-lightest min-h-75px">
      <h2 className="text-primary text-2xl m-0 uppercase fjalla-one-regular font-titles font-normal tracking-1px">
        {children}
      </h2>
    </header>
  );
}

export function PanelContent({ children }) {
  return (
    <div className="p-6 overflow-y-auto calcheight-140px panel-content font-content">
      {children}
    </div>
  );
}

export function PanelFooter({ children }) {
  return (
    <footer className="py-4 px-6 flex justify-end border-t border-secondary-lightest h-65px">
      {children}
    </footer>
  );
}
