'use strict'

let stores = []
let hours = ['STORE','6am', '7am', '8am', '9am', '10am', '11am']
let Store = function (name, min, max, cookiesPerCustomer){
  this.name = name
  this.min = min
  this.max = max
  this.cookiesPerCustomer = cookiesPerCustomer
}
Store.prototype.cookiesSoldPerHour = function() { //make sure method does not include same declarations as customersPerOwner
  let randomNumber = Math.ceil(Math.random() * (this.max - this.min) + this.min)
  return randomNumber * this.cookiesPerCustomer
}

let pike = new Store('Pike', 23, 65, 6)
let seatac = new Store('Seatac',3, 23, 2)
let seacenter = new Store('Seacenter', 11, 38, 4)
let capitol = new Store('Capitol', 20,38,3)
let alki = new Store('Alki', 2,16,5)
stores.push(pike, seatac, seacenter, capitol, alki)

let docBod = document.getElementById('myBod')
let tbl = document.createElement('table')
let tblHeader = document.createElement('tr')
let tblHeaderCell = document.createElement('th')

docBod.appendChild(tbl)
tbl.appendChild(tblHeader)

for (let i = 0; i < hours.length; i++){
  let tblHeaderCell = document.createElement('th')
  tblHeader.appendChild(tblHeaderCell)
  tblHeaderCell.innerText = hours[i]
}

for  (let j=0; j<stores.length; j++){
  let tblRow = document.createElement('tr')
  tbl.appendChild(tblRow)
  let tblHeaderCell = document.createElement('th')
  tblRow.appendChild(tblHeaderCell)
  tblHeaderCell.innerText = stores[j].name
  for (let i = 0; i < hours.length; i++){
      let tblTd = document.createElement('td')
      tblRow.appendChild(tblTd)
      tblTd.innerText = stores[j].cookiesSoldPerHour()
  }
}

// let storeNames = document.getElementById('storeNames')
// for (let k=0;k < stores.length; k++){
//   let storeName = document.createElement('li')
//   storeNames.appendChild(storeName)
//   storeName.innerText = stores[k].name
// }
// docBod.appendChild(storeNames)