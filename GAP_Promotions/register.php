<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$fname = $_POST['FirstName'];
$lname = $_POST['LastName'];
$email = $_POST['Email'];
$pass = $_POST['Pass'];

$sql = "Insert into gap_promotions.users(FirstName, LastName, Email, Password) VALUES('" . $fname . "', '" . $lname . "', '" . $email . "', '" . $pass . "')";

if ($conn->query($sql) === TRUE)
{
	echo "New record created successfully";
}
else {
	echo "Error: " . $sql . "
<br> " . $conn->error;
}

$conn->close();

?>