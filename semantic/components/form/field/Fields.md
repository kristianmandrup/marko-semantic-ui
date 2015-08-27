### Fields

#### Basic text field

`ui-field(ui='large' label='First name')`

#### Password field

`ui-field(ui='small red' label='Secret' type='password')`

#### Multiple fields using data

`ui-fields(list='data.userForm.fields')`

```jade
ui-fields
  ui-field(ui='small blue' label='Username')
  ui-field(ui='small green' label='Secret' type='password')
```

#### Combination

```jade
ui-field(ui='large' label='First name')
ui-fields(list='data.userForm.fields')
ui-fields
  ui-field(ui='small blue' label='Username')
  ui-field(ui='small green' label='Secret' type='password')
```
