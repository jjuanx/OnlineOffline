import { get, post, put, destroy, patch} from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

function create (data) {
  return post('restaurants', data)
}

function update (id, data) {
  return put(`restaurants/${id}`, data)
}

function remove (id) {
  return destroy(`restaurants/${id}`)
}

function changeStatus(id){
  return patch(`/restaurants/${id}/changeStatus`)
}

export { getAll, getDetail, getRestaurantCategories, create, update, remove , changeStatus}
