<?php
include 'CONEXION.php';

$conn = $conn; // Reusar la conexión desde el archivo CONEXION.php

$sql = "SELECT * FROM tbl_fallas_motivos";
$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

$data = [];
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $data[] = $row;
}

echo json_encode($data);

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>
