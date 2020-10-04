<?php
header('Access-Control-Allow-Origin: *');

require("conexao.php");


$query_ = "SELECT * FROM pontos ORDER BY ponto DESC limit 3";
$result = $conn->query($query_);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    echo $row['nome'] . "|" . $row['ponto'] . "|";
  }
} else {
  echo "Não há registros";
}
$conn->close();
?>
