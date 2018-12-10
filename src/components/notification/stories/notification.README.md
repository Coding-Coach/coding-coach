### Notification Component

#### Usage
```jsx
<Notification
  type={NOTIFICATION_TYPES.neutral}
  title="Emma wants to be your mentee!"
  message="Head over to invitations to check out your invite."
  time={new Date(2018, 12, 24, 22, 29, 0)}
  onClose={() => console.log('discard notification')}
          onClick={() => console.log('click notification')}
/>
```
| propName | propType | defaultValue | isRequired | Description                |
| -------- | -------- | ------------ | ---------- | -------------------------- |
| type     | string   | primary      | no         | mentorship, account, error |
| title    | string   |              | yes        | Notification title         |
| message  | string   |              | yes        | Notification message       |
| time     | Date     |              | yes        | Notification time          |
| onClose  | function |              | yes        | Discard notification       |
| onClick  | function |              | no         | Click handler              |


### Use Cases
#### Notification Types
```jsx
<Notification
  type={NOTIFICATION_TYPES.neutral}
  title="Emma wants to be your mentee!"
  message="Head over to invitations to check out your invite."
  time={new Date(2018, 12, 24, 22, 29, 0)}
  onClose={() => console.log('discard notification')}
  onClick={() => console.log('click notification')}
/>

<Notification
  type={NOTIFICATION_TYPES.success}
  title="Update your profile"
  message="Update your profile to get better matches!"
  time={new Date(2018, 12, 24, 22, 29, 0)}
  onClose={() => console.log('discard notification')}
  onClick={() => console.log('click notification')}
/>

<Notification
  type={NOTIFICATION_TYPES.error}
  title="Error"
  message="You don't have the permission to perform this action!!"
  time={new Date(2018, 12, 24, 22, 29, 0)}
  onClose={() => console.log('discard notification')}
  onClick={() => console.log('click notification')}
/>
```
