function factory(restaurant) {
  return {
    ...restaurant,
    resizer_url: `https://resizer.otstatic.com/v2/profiles/legacy/${restaurant.id}.jpg`
  };
}

module.exports = factory;
