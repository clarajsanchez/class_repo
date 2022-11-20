// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;  
  const quantity = product.querySelector(".quantity input").valueAsNumber;

  let subtotalValue = price * quantity;
  //document.querySelector(".subtotal span").innerHTML = subtotal;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalValue;

  console.log(price, quantity);
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const products = document.getElementsByClassName('product');
  let totalValue = 0;

  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  document.querySelector("#total-value span").innerText = totalValue;

  console.log(totalValue);

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
    <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const parent = document.querySelector("#cart tbody");
  parent.appendChild(newTableRow);

  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
  //... your code goes here
});
