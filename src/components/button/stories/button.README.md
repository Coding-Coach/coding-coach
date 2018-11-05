### Button Component

#### Usage
```jsx
<Button onClick={this.handleClick}>Submit</Button>
```
| propName  | propType | defaultValue | isRequired | Description                                   |
|-----------|----------|--------------|------------|-----------------------------------------------|
| id        | string   |              | no         | Incase an id needs to be passed to the button |
| onClick   | function |              | yes        | Click Handler                                 |
| fullWidth | boolean  |              | no         | Button width will take the width of parent    |
| disabled  | boolean  |              | no         | Disable button                                |
| children  | node     |              | yes        | Content of button, can be text or icon        |
| type      | string   | primary      | no         | primary, secondary, tertiary, danger          |
| size      | string   | medium       | no         | default, small, large                         |
| shape     | string   | rounded      | no         | square, rounded, pill                         |


### Use Cases
#### Button With Icon
```jsx
<Button onClick={this.handleClick}>
  <FontAwesomeIcon icon={faTwitter} size="2x" />
  With Some Icon
</Button>
```

#### Button Types
```jsx
<Button disabled>Disabled Button</Button>
<Button type="danger">Danger Button</Button>
<Button>Primary Button</Button>
<Button type="secondary">Secondary Button</Button>
<Button type="tertiary">Tertiary Button</Button>
```

#### Button Sizes
```jsx
<Button type="danger" size="large">
  Large Button
</Button>

<Button type="secondary" size="small">
  Small Button
</Button>

<Button type="tertiary" fullWidth>
  Full Width
</Button>
```

#### Button Shapes
```jsx
<Button shape="square">
  Large Button
</Button>

<Button shape="rounded">
  Small Button
</Button>

<Button shape="pill">
  Full Width
</Button>

```



