const restaurants = require('../../src/data/restaurants').restaurants;
const { int2kebab, kebab2int } = require('../../src/routes/seo-friendly');

describe('int2kebab & kebab2int', () => {
  restaurants.forEach(({ name, id }) => {
    test(name, () => {
      const kebab = int2kebab(id);
      expect(kebab).toMatchSnapshot();
      const int = kebab2int(kebab);
      expect(int).toEqual(id);
    });
  });
});
