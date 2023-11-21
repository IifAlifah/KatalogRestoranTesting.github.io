import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Nama Restaurant</h4>
    <p>${restaurant.name}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <h4>Menu Makanan</h4>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
    <h4>Menu Minuman</h4>
    <ul>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
    <h3>Customer Review</h3>
    <ul class="detail-review"> 
      ${restaurant.customerReviews.map((review) => `
        <li class="detail-review-item">
          <div class="header-review">
            <h4 class="name-review"><i title="restaurant" class="fa fa-user-circle"></i>${review.name}</h4>
            <p class="date-review">${review.date}</p>
          </div>
          <div class="body-review">
            ${review.review}
          </div>
        </li>
      `).join('')}
    </ul>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p>${restaurant.description}</p>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
