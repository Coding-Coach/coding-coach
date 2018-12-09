### Notification Component

#### Usage
```jsx
<Notification
  type="mentorship"
  title="Emma wants to be your mentee!"
  message="Head over to invitations to check out your invite."
  time="10:29 p.m."
/>
```
| propName | propType | defaultValue | isRequired | Description                |
| -------- | -------- | ------------ | ---------- | -------------------------- |
| onClick  | function |              | no         | Click Handler              |
| title    | string   |              | yes        | Notification title         |
| message  | string   |              | yes        | Notification message       |
| time     | string   |              | yes        | Notification time          |
| type     | string   | primary      | no         | mentorship, account, error |


### Use Cases
#### Notification Types
```jsx
<Notification
  type="mentorship"
  title="Emma wants to be your mentee!"
  message="Head over to invitations to check out your invite."
  time="10:29 p.m."
/>
<Notification
  type="account"
  title="Update your profile"
  message="Update your profile to get better matches!"
  time="10:29 p.m."
/>
<Notification
  type="error"
  title="Error"
  message="You don't have the permission to perform this action!!"
  time="10:29 p.m."
/>
```
```
