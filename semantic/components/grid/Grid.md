Grid
----

Useful for displaying tables and table-like layouts.

### UI Grid

```jade
ui-grid(ui='inverted' list='data.users')
```

```jade
ui-grid(ui='inverted')
  ui-row(ui='green' list='data.users.header')
  for(each='item in data.users.list; status-var=idx ')
    ui-row(ui='silver' attrs='item' if='idx % 2 == 0')
    ui-row(ui='blue' attrs='item' if='idx % 2 == 0')
```

### UI Row

`ui-row(ui='silver' list='data.rowData'`

### UI Column

`ui-column(ui='silver' list='data.cellData'`
