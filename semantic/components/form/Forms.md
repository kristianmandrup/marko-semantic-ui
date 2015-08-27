Forms
-----

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

### Input

### Form

### Messages

### Combination

```jade
ui-form
  ui-field(ui='large' label='First name')
    line-input(name='username')
  ui-field(ui='large' label='Male')
    check-box(name='male' checked='true')
  ui-field(label='skills')
    drop-down(name='coolSkills' list='data.skills')
  ui-field(label='Extra skills')
    multi-select(name='mySkills' list='data.skills')
  radio-btn(name='work' value='yes' label='work' field='yes')
  radio-btn(name='work' value='no' label='work' field='yes')
```
