class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Obj = this.constructor || [Symbol.species];
    return new Obj();
  }
}

export default Car;
