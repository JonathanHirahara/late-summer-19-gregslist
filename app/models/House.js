export default class House {
  constructor(data) {
    this.bedrooms = data.bedrooms || ''
    this.baths = data.baths || ''
    this.sqft = data.sqft || ''
    this.pets = data.pets || ''
  }


  get houseTemplate() {
    return `
    <div class="col-4">
        <h4>Bedrooms: ${this.bedrooms}</h4>
        <h4>Baths: ${this.baths}</h4>
        <h4>Sqft: ${this.sqft}</h4>
        <p>Pets: ${this.pets}</p>
      </div>
    `
  }
}