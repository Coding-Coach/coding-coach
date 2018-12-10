import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import NotificationReadme from './notification.README.md';

import Notification from '../Notification';
import Container from './container-story';

storiesOf('Components/Notification', module).add(
  'Notification Types',
  withDocs(NotificationReadme, () => {
    const time = new Date(2018, 12, 10, 22, 29, 0);

    return (
      <Container title="Notification Types">
        <Notification
          type="mentorship"
          title="Emma wants to be your mentee!"
          message="Head over to invitations to check out your invite."
          time={time}
          onClose={() => console.log('discard notification')}
          onClick={() => console.log('click notification')}
        />
        <Notification
          type="account"
          title="Update your profile"
          message="Update your profile to get better matches!"
          time={time}
          onClose={() => console.log('discard notification')}
          onClick={() => console.log('click notification')}
        />
        <Notification
          type="error"
          title="Error"
          message="You don't have the permission to perform this action!!"
          time={time}
          onClose={() => console.log('discard notification')}
          onClick={() => console.log('click notification')}
        />
      </Container>
    );
  }),
);
