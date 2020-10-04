<?php
//$conn = mysqli_connect("localhost", "root", "", "game");
$conn = mysqli_connect("a2plcpnl0196.prod.iad2.secureserver.net", "professor", "@Professor2019", "professor");


if ($conn->connect_error) {
  die("Erro Conexão: " . $conn->connect_error);
}
