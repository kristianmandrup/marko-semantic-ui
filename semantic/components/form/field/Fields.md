### Fields

Default: text field

`ui-field(ui='large' label='First name')`

Password field

`ui-field(ui='small red' label='Secret' type='password')`

Multiple fields using data

`ui-fields(list='data.userForm.fields')`

```jade
ui-fields
  ui-field(ui='small blue' label='Username')
  ui-field(ui='small green' label='Secret' type='password')
```
