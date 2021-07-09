// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity').firstElementChild.value;  

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');

  let sum = 0;
  for(let i= 0; i< products.length ; i++) {
    sum = sum + updateSubtotal(products[i]);
  }
  
  
  // ITERATION 3
  const totalHTML = document.querySelector('#total-value span');
  totalHTML.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  target.closest(".product").remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const targetClone = document.querySelector("template");
  const clone = targetClone.content.cloneNode(true);

  let newName =document.querySelector('.create-product input[type="text"]').value;
  let newValue = document.querySelector('.create-product input[type="number"]').value;
  clone.querySelector('.name span').innerHTML = newName;
  clone.querySelector('.price span').innerHTML = newValue;  
  document.querySelector('.create-product input[type="text"]').value = "";
  document.querySelector('.create-product input[type="number"]').value = 0;

  clone.querySelector(".btn-remove").addEventListener('click', removeProduct);
  document.querySelector("#cart tbody").appendChild(clone);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

const buttons = document.querySelectorAll(".btn-remove");
buttons.forEach( (item) => item.addEventListener('click', removeProduct));

const createButton = document.getElementById("create");
createButton.addEventListener('click', createProduct);

