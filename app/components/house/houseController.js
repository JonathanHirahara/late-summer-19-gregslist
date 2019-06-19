import HouseService from "./houseService.js";



let _houseService = new HouseService()

function drawHouses() {
  let housesElem = document.querySelector('#houses')
  let houses = _houseService.Houses
  let template = ''
  houses.forEach(house => {
    template += house.houseTemplate
  });
  housesElem.innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("house controller works")
    drawHouses()


  }
  addHouse(e) {
    e.preventDefault()
    let form = e.target

    let newHouse = {

      bedrooms: form.Bedrooms.value,
      baths: form.Baths.value,
      sqft: form.Sqft.value,
      pets: form.Pets.value
    }

    _houseService.addHouse(newHouse)
    form.reset()
    drawHouses()
  }

}