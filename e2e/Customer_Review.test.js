// /* eslint-disable no-undef */
// Feature('Customer Review');

// Before(({ I }) => {
//   I.amOnPage('/');
// });

// Scenario('adding a review to a restaurant', async ({ I }) => {
//   const firstRestaurant = locate('.restaurant-item__content a').first();
//   const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//   I.click(firstRestaurant);

//   I.waitForElement('.form-review');

//   // Fill out the review form
//   I.fillField('#inputName', 'Siti');
//   I.fillField('#inputReview', 'Makanannya enak-enak');
//   I.click('#submit-review');

//   // Wait for the new review to appear
//   I.waitForElement('.detail-review');

//   // Assert that the new review is visible
//   I.see('Siti', '.detail-review .name-review');
//   I.see('Makanannya enak-enak', '.detail-review .body-review');

//   // Assert that the title of the first restaurant matches the grabbed title
//   const newFirstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
//   I.assertEquals(newFirstRestaurantTitle, firstRestaurantTitle);
// });

/* eslint-disable no-undef */
Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('adding a review to a restaurant', async ({ I }) => {
  // Mengarahkan ke halaman detail
  I.click(locate('.restaurant-item__content a').first());

  // Loading
  I.waitForElement('.form-review');

  // Mengisi Form
  I.fillField('#inputName', 'Siti');
  I.fillField('#inputReview', 'Makanannya enak-enak');

  // submit review
  I.click('#submit-review');

  // Wait for the new review to appear
  I.waitForElement('.detail-review');

  // Assert that the new review is visible
  I.see('Siti', '.detail-review .name-review');
  I.see('Makanannya enak-enak', '.detail-review .body-review');
});
