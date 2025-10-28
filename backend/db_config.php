<?php
// ===============================
// Database Configuration File
// ===============================

// InfinityFree MySQL details
$servername = "sqlXXX.epizy.com";     // ⚠️ Replace XXX with your actual server name (e.g. sql210.epizy.com)
$username   = "epiz_XXXXXXXX";        // ⚠️ Replace with your InfinityFree username
$password   = "YourPasswordHere";     // ⚠️ Replace with your InfinityFree DB password
$dbname     = "epiz_XXXXXXXX_portfolio_db";  // ⚠️ Replace with your database name

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check Connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
} else {
    // Optional: for quick debug
    // echo "✅ Database Connected Successfully!";
}
?>