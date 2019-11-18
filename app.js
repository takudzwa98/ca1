ReactDom.render(
  React.createElement(
    "h1",
    {"style":{"color": "red"}},
    "Hello World"

  ),
  document.getElementById("root")
);
// Event listener to watch for clicks on link in HTML
//   .querySelector('#productsContainer>li>a')
//   .addEventListener('click', fetchProducts);

document.addEventListener('DOMContentLoaded', fetchProducts)

// Function runs when link in HTML is clicked.
// Uses fetch to get JSON content from products.php
// (which in turn retrieves them from DB)
function fetchProducts() {

  fetch('db-connect.php')
    .then(res  => res.json())
    .then(json => {

      // Replace with updating react template bindings
      // Here: just changes the innerHTML of ul#productsContainer
      document
        .querySelector('#productsContainer')
        .innerHTML = json.map(product => `
          <li>${product.name}: ${product.price}</li>
        `).join('')

    });}

  
