<?php
$servername = "sqlXXX.epizy.com";   // Replace with your host
$username   = "epiz_XXXXXXX";       // Replace with your username
$password   = "YOUR_PASSWORD";      // Replace with your password
$dbname     = "epiz_XXXXXXX_portfolio_db"; // Replace with your DB name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("❌ Connection failed: " . $conn->connect_error);
}
?>