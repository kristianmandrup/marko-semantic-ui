Feed
====

Contains specific types of lists, such as user activity etc.

```jade
ui-feed(list='data.users.activity')

ui-feed
  feed-event(image='data.images.default' content='data.my.content')

ui-feed
  feed-event(attrs='data.myEvent')
  feed-event
    feed-content(date='5 mins ago' summary='BBQ at the beach' meta='simply awesome!' extra='data.extra.likes')
```
