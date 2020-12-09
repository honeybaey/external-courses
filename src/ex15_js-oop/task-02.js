class ElectroDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isActive = false;
  }

  turnDevice() {
    this.isActive = true;
  }
}

const kettle = new ElectroDevice("kettle", 1800);
const iron = new ElectroDevice("iron", 1450);
const microwave = new ElectroDevice("microwave", 1000);
const laptop = new ElectroDevice("laptop", 400);

class House {
  constructor() {
    this.devices = [];
  }

  addDevices(device) {
    this.devices.push(device);
  }

  searchDeviceInHouse(name) {
    if (typeof name !== "string" || name.length === 0) {
      console.log("Enter a valid name");
    } else {
      this.devices.find(
        (device) => name.toLowerCase().trim() === device.name.toLowerCase()
      )
        ? console.log(
            this.devices.find(
              (device) =>
                name.toLowerCase().trim() === device.name.toLowerCase()
            )
          )
        : console.log("Not found");
    }
  }

  calculateUsedPower() {
    let usedPower = 0;
    const activeDevices = this.devices.filter((device) => device.isActive);
    activeDevices.forEach((device) => (usedPower += device.power));
    console.log(usedPower);
  }
}

const house = new House();

house.addDevices(iron);
house.addDevices(laptop);
house.addDevices(kettle);
house.addDevices(microwave);

laptop.turnDevice();
iron.turnDevice();

house.calculateUsedPower();

house.searchDeviceInHouse("laptop");
