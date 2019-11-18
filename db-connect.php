<?php
  // DB Details -- Please replace database credentials below with your own $db_name, $db_user and $db_pass.
  $db_name = 'takudzwa1_products';
  $db_user = 'root';
  $db_pass = '';
  // We now create a secure connection to the database using PDO
  $db      = new PDO("mysql:host=localhost;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);

  // Get all product data from the database
  $statement = $db->prepare('SELECT id,name,price,descri FROM products');
  $statement->execute();

  // Create an Associative array of all DB results
  $products = $statement->fetchAll();

  // Render response as JSON (so it can be 'fetched' and parsed in in JS)
  header('Content-Type: application/json');
  echo json_encode($products);

?>