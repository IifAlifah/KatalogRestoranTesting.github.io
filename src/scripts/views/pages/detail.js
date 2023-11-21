import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import AddReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
    <div class="content" id="detailContent">
      <h2 class="content__heading">Detail Restaurant</h2>
      <div id="restaurants" class="restaurants"></div>
      <div id="likeButtonContainer"></div>
    </div>

    <div class="form-review">
      <form>
        <div class="mb-3">
          <label for="inputName" class="form-label">Name</label>
          <input name="inputName" type="text" class="form-control" id="inputName">
        </div>
        <div class="mb-3">
          <label for="inputReview" class="form-label">Review</label>
          <input name="inputReview" type="text" class="form-control" id="inputReview">
        </div>      
        <button id="submit-review" type="submit" class="btn">OK</button>
      </form>
      </div>
    </div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant,
    );
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
      },
    });
    const submitReview = document.getElementById('submit-review');
    if (submitReview) {
      submitReview.addEventListener('click', (event) => {
        event.preventDefault();
        AddReview();
      });
    }
  },
};

export default Detail;
