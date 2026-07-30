products = [
  //array of objects
  { pid: 100, pname: 'apple', band: '5G', price: 120000, display: 'led' },
  { pid: 101, pname: 'samsung', band: '5G', price: 45000, display: 'led' },
  { pid: 102, pname: 'blackberry', band: '4G', price: 50000, display: 'led' },
  { pid: 103, pname: 'nokia', band: '3G', price: 1200, display: 'lcd' },
  { pid: 104, pname: 'motorola', band: '4G', price: 10000, display: 'lcd' },
]

//1. print product name only
products.forEach(data=> console.log(data.pname))

//2. print all mobile details whose display is lcd
products.filter(data=> data.display=="lcd" ).forEach(p=>console.log(p))

//3. print 5G mobile phone name
products.filter(data=> data.band=="5G" ).forEach(p=>console.log(p))

//4. sort mobile based on price
products.sort((d1, d2) => d1.price - d2.price)
console.log("Sorted mobiles by price:")
products.forEach(p => console.log(p))

//5. print costly mobile
const costlyMobile = products.reduce((max, curr) => curr.price > max.price ? curr : max, products[0])
console.log("Costly mobile:", costlyMobile)

//6. print low cost mobile
const lowCostMobile = products.reduce((min, curr) => curr.price < min.price ? curr : min, products[0])
console.log("Low cost mobile:", lowCostMobile)
