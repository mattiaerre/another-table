# Feature Toggle Middleware

Add an express middleware that attaches to the request object a `features` data structure that enables to toggle between 2 different versions of the menu widget.

![Menu V1](menu-widget-v1.png 'Menu V1')

![Menu V2](menu-widget-v2.png 'Menu V2')

## URL

[http://localhost:3000/restaurant/4121](http://localhost:3000/restaurant/4121)

## Tasks

- Add a `features.js` file containing the [Application-level middleware function](https://expressjs.com/en/guide/using-middleware.html)

- Wire the middleware w/ the existing app

- Use the middleware in the `restaurant.js` route file in order to set the `includeMenuV2` variable

```
router.get('/:id', (req, res) => {
  const includeMenuV2 = false; // FIXME

  const restaurant = restaurants.find(
    item => item.id === parseInt(req.params.id, 10)
  );

  const model = Object.assign({}, restaurant, { includeMenuV2 });

  res.render('restaurant', model);
});
```

## Examples

1. Example 1

2. Example 2
