import { mockRestaurantTable } from './mockDatabase'

export let restaurantTable = mockRestaurantTable

export class databaseRestaurant {
  constructor(
    id = "",
    booking = [],
  ) {
    this.id = id
    this.booking = booking
  }

  getOneRestaurant() {
    const dataRestaurant = restaurantTable.filter((data) => data.id === this.id)[0]

    return dataRestaurant
  }

  getAllRestaurant() {
    return restaurantTable
  }

  updateRestaurant() {
    const isIdExist = restaurantTable.some((data) => data.id === this.id)
    if (isIdExist) {
      const dataUpdated = {
        id: this.id,
        booking: this.booking,
      }
      const newTable = restaurantTable.map((row) =>
        row.id === this.id ? { ...row, ...dataUpdated } : row
      )

      restaurantTable = newTable
      return dataUpdated
    }

    return "data not exist"
  }
}
