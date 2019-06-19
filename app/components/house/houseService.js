import House from "../../models/House.js";



let _houses = [
  new House({ bedrooms: 4, baths: 2, sqft: 1340, pets: "no" }),
  new House({ bedromms: 2, baths: 1, sqft: 980, pets: "yes" })
]

export default class HouseService {
  constructor() {
    console.log("houseservice works")
  }


  get Houses() {
    return _houses.map(houses => new House(houses))
  }


  addHouse(newHouse) {
    _houses.push(new House(newHouse))
  }
}

