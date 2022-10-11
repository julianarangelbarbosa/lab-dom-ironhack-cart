// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const newPrice = price.innerHTML
    const newQuantity = quantity.value
    let calculate = newPrice * newQuantity
    let subtotal = product.querySelector('.subtotal span')
    subtotal.innerHTML = calculate
    return subtotal
}

function calculateAll() {
 
  const products = document.getElementsByClassName('product');
   let totalValue = 0;
   for (let i = 0; i < products.length; i++){
     totalValue = totalValue + updateSubtotal(products[i])
    }
    document.querySelector('total -value span').innerHTML = totalValue
  }
 
  // end of test

  // ITERATION 2
  //... your code goes here
   

  // ITERATION 3
  

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
