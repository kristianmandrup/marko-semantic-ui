Checkboxes
----------

```jade
ui-field(ui='large' label='Male')
  check-box(name='male' checked='true')
check-box(name='male' checked='true' field='Male')
check-boxes(list='data.languages' label='Languages')
```

TODO:

Should take a `type` to select which type of checkbox:

-	toggle
-	slider
-	multi (or select)
-	default
