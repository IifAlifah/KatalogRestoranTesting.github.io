/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  // Go to the restaurant
  I.amOnPage('/#/restaurant');
  I.seeElement('.restaurant-item__content a');

  // Like the first restaurant
  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Go to the favorite page and check if the liked restaurant is there
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Go back to the restaurant detail page
  I.click(locate('.restaurant-item__content a').first());

  // Unlike the restaurant
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Go to the favorite page and check if the unliked restaurant is not there
  I.amOnPage('/#/favorite');
  I.dontSeeElement(locate('.restaurant-item').withText(likedRestaurantTitle));
});
