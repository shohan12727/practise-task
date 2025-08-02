const mobile = {
   
  brand: 'Samsung',
  price: 25555,
  color: 'red',
  camera: '12mp'

}

// for(const element in mobile){
//   console.log(mobile[element]); 
// }

// for of: array
// for in: object


const mobile2 = {
  brand: "DummyBrand",
  model: "X1000",
  os: "DummyOS 1.0",
  screenSize: "6.5 inches",
  battery: {
    capacity: "4500mAh",
    charging: "Fast Charging 30W"
  },
  camera: {
    rear: "64MP + 12MP + 5MP",
    front: "32MP"
  },
  storage: {
    ram: "8GB",
    internal: "128GB",
    expandable: true
  },
  connectivity: {
    wifi: true,
    bluetooth: "5.2",
    nfc: false,
    fiveG: true
  },
  price: "$599",
  isAvailable: true,
  getSpecs: function () {
    return `${this.brand} ${this.model} with ${this.camera.rear} camera and ${this.storage.ram} RAM.`;
  }
};

for(const ele in mobile2){
  console.log(mobile2[ele]); 
}

const value = Object.values(mobile2);
for(const e of value){
  console.log(value, e);
  
}
