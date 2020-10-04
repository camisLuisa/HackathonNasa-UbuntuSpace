<?php
$conn = mysqli_connect("localhost", "root", "", "game");
if ($conn->connect_error) {
  die("Erro Conexão: " . $conn->connect_error);
}
