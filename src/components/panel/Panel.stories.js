import React from 'react';
import { storiesOf } from '@storybook/react';

import { Panel, PanelHeader, PanelContent, PanelFooter } from './Panel';

const onClickDismiss = () => alert('It can dismiss something');
const onClickAccept = () => alert('It can dismiss something');

const ButtonHardcoded = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;
storiesOf('Components/Panel', module)
  .add('Complete Panel with actions', () => {
    return (
      <Panel>
        <PanelHeader>Complete Panel Example</PanelHeader>
        <PanelContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Donec tempor malesuada augue, eu blandit ipsum sagittis sed. Fusce ultricies justo et
            massa mattis tincidunt. In lacinia ornare eros, quis tempus metus volutpat ut. Cras et
            sapien lectus. Sed pulvinar nibh faucibus pretium tristique. Integer finibus nisi et
            ipsum tincidunt, tristique semper nunc dictum. Cras fermentum vitae nulla vel auctor.
          </p>
          <p>Mauris vel lacus diam.</p>
        </PanelContent>
        <PanelFooter>
          <ButtonHardcoded onClick={() => onClickDismiss()}>asdasdasd</ButtonHardcoded>
          <ButtonHardcoded onClick={() => onClickAccept()}>Accept</ButtonHardcoded>
        </PanelFooter>
      </Panel>
    );
  })
  .add('Complete Panel with quote', () => {
    return (
      <Panel>
        <PanelHeader>Complete Panel Example</PanelHeader>
        <PanelContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Mauris vel lacus diam.</p>
        </PanelContent>
        <PanelFooter>
          <span>
            <i>
              <small>This could include a text for example</small>
            </i>
          </span>
        </PanelFooter>
      </Panel>
    );
  })
  .add('Panel without footer', () => {
    return (
      <Panel>
        <PanelHeader>Panel without footer</PanelHeader>
        <PanelContent>
          <p>
            Donecmetus volutpat ut. Cras et sapien lectus. Sed pulvinar nibh faucibus pretium
            tristique. Integer finibus nisi et ipsum tincidunt, tristique semper nunc dictum. Cras
            fermentum vitae nulla vel auctor.
          </p>
        </PanelContent>
      </Panel>
    );
  });
