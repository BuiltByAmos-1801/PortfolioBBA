<?php
// ===============================
// Database Configuration File
// ===============================

// InfinityFree MySQL details
$servername = "sql213.byetcluster.com";  // 👈 from "Server" in your screenshot
$username   = "if0_40272460";            // 👈 same as database prefix
$password   = "am0099os1801";        // 👈 the DB password you set in InfinityFree
$dbname     = "if0_40272460_user_data";  // 👈 from "Database" in your screenshot
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