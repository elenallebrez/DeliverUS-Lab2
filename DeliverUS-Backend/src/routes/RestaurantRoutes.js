import RestaurantController from '../controllers/RestaurantController.js'
import { Restaurant } from '../models/models.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  //Customer functional requirements:
  //FR1: Restaurants listing: Customers will be able to query all restaurants.
  //FR2: Restaurants details and menu: Customers will be able to query restaurants details and the products offered by them.

  //Owner functional requirements:
  //FR1: To Create, Read, Update and Delete (CRUD) Restaurants: Restaurantes are related to an owner, so owners can perform these operations to the restaurants owned by him. If an owner creates a Restaurant, it will be automatically related (owned) to him.

  app.route('/restaurants') //the endpoint path
  .get(RestaurantController.index)

  app.route('/restaurants/:restaurantId')
  .post(Restaurant.create)
  .get(Restaurant.show)
  .put(RestaurantController.update)
  .delete(RestaurantController.destroy)
}
export default loadFileRoutes
