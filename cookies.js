'use strict'

let elBody = document.getElementById('myBod')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am']

let stores = []

let Pike = {
  storeName: 'Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCustomer: 6,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers)+ this.minCustomers)
    return randomNumber * this.cookiesPerCustomer
  }
}

let Seatac = {
  storeName: 'Seatac',
  minCustomers: 3,
  maxCustomers: 23,
  cookiesPerCustomer: 2,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    return randomNumber * this.cookiesPerCustomer
  } 
}

let Seacenter = {
  storeName: 'Seacenter',
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerCustomer: 4,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    return randomNumber * this.cookiesPerCustomer
  }
}

let Capitol = {
  storeName: 'Capitol',
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerCustomer: 3,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    return randomNumber * this.cookiesPerCustomer
  }
}

let Alki = {
  storeName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerCustomer: 5,
  cookiesSoldPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    return randomNumber * this.cookiesPerCustomer
  }
}

// stores.push('Pike', 'Seatac', 'Seacenter', 'Capitol', 'Alki')

//Displaying store name in a h2 tag
let elPikeTitle = document.createElement('h2')
elBody.appendChild(elPikeTitle)
elPikeTitle.innerText = Pike.storeName

//Create a ul to display information on customer purchases
let elList = document.createElement('ul')
elBody.appendChild(elList)

//For loop to populate li in the HTML
for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of cookies', Pike.cookiesSoldPerHour())
  let elListItem = document.createElement('li')
  elList.appendChild(elListItem)
  elListItem.innerText = hours[i] + ':' + Pike.cookiesSoldPerHour() + ' cookies sold'
}

