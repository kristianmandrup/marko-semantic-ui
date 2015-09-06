Buttons
-------

`icon='data.icon' image='data.image' label='$data.label'`

### Basic button

`ui-button(ui='large red' label='warning')`

### Link button

`ui-button(ui='large violet' label='go baby!' link='google.com')`

### Icon button

`ui-button(ui='large green' label='go baby!' icon='user')`

### Submit buttons

`ui-button(ui='large blue' label='go baby!' type='submit')`

### Group of buttons

```jade
ui-buttons(ui='large')
  ui-btn(label='hello')
  ui-btn(label='bye' ui='primary')
```

```jade
ui-buttons(ui='large' list='data.buttons')
```
