Sidebar
=======

Sidebar should normally go on the left side, in combination with Off canvas transitions for a Hamburger menu ;)

See [Usage](http://semantic-ui.com/modules/sidebar.html#/usage)

### Using Fixed Content

Any fixed position content that should move with page content when your sidebar is visible, should receive the class name fixed and exist as a sibling element to your sidebar.

Fixed content that is not included adjacent to your pusher will lose its positioning when a sidebar is shown.

```html
<body>
  <div class="ui sidebar">
    ...
  </div>
  <div class="ui top fixed menu">
    ...
  </div>
  <div class="pusher">
    Your site's actual content
  </div>
</body>
```
