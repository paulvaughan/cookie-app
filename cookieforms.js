'use strict'

//using the method document.getElementById elements in html are matched
let elStoreTable = document.getElementById('store-table')
let elForm = document.getElementById('store-form')

//variables declared and assigned value of an array with store hours AS STRINGS
let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let stores = []

//New variable declared and assigned the value of a constructor function. This returns objects as shown below
let CookieStore = function(name, min, max, sold) {
  this.storeName = name
  this.maxCustomers = max
  this.minCustomers = min
  this.cookiesPerCustomer = sold
}

//Prototype method usedon CookieStores constructor. Returns a random number between the min and max customers multiply by number of cookies per customer.
CookieStore.prototype.cookiesSoldPerHour = function() {
  let randomNumber = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
  return randomNumber * this.cookiesPerCustomer
}

//Now I can create new references to the store locations using CookieStores object constructor
let Pike = new CookieStore ('Pike', 23, 65, 6)
let Seatac = new CookieStore ('Seatac', 3, 23, 2)
let Seacenter = new CookieStore ('Seacenter', 11, 38, 4)
let Capitol = new CookieStore ('Capitol', 20, 38, 3)
let Alki = new CookieStore ('Alki', 2, 16, 5)

//push these new instances of to the end of our stores array
stores.push(Pike, Seatac, Seacenter, Capitol, Alki)

//New row created for header using createElement - includes column titles
let elHeader = document.createElement('tr')
elStoreTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Store Name'
//loop through our hours array and display each hour as a table header element
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

//Using prototype method with cookiestore constructor to generate new rows for each store and populate the row with the random number returned from our cookiesSoldPerHour prototype method
CookieStore.prototype.renderNewStore = function() {
  let elRow = document.createElement('tr')
  elStoreTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = this.storeName
  for(let i = 0; i < hours.length; i++) {
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = this.cookiesSoldPerHour()
  }
}

//Now loop through stores array and utilize rendernewstore method to generate a new row on our table
for(let j = 0; j < stores.length; j++) {
  stores[j].renderNewStore()
}

//access our inputs on our form through dot notation
let elNameOfStore = elForm.nameOfStore
let elMinCustomers = elForm.minCustomers

//Event listener created with prevent default to hold for instruction. Event will listen for a submit event and create a new instance of our constructor function using the values collected from our form
elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newStore = new CookieStore(elNameOfStore.value, parseInt(elMinCustomers.value), 65, 4)
  stores.push(newStore)

  //Utilize renderNewStore method on our new store to add a new row on our table. 
  newStore.renderNewStore()
})
