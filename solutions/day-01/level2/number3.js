const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')){

    shoppingCart.unshift('Meat')
}

console.log(shoppingCart)

if(!shoppingCart.includes('Sugar')){

    shoppingCart.push('Sugar')
}

console.log(shoppingCart)

let allergicToHoney = true
indexOfHoney = shoppingCart.indexOf('Honey')
if(allergicToHoney)  {
   console.log(shoppingCart.slice(0, indexOfHoney).concat(shoppingCart.slice(indexOfHoney+1)))
}
    
const indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea'
console.log(shoppingCart)