<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal con Tabla</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="openModalBtn">Abrir Modal</button>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Tabla de Fallas y Motivos</h2>
            <table id="data-table">
                <!-- Contenido de la tabla se generará dinámicamente -->
            </table>
            <button id="downloadBtn">Descargar en XLSX</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
