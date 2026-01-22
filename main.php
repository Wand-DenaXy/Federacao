<?php
    session_start();

    if(isset($_SESSION['utilizador'])){ 
?>

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ficha Formativa 4 - 5417</title>
        <link rel="stylesheet" href="assets/css/datatables.css">
        <link rel="stylesheet" href="assets/css/select2.css">
        <link rel="stylesheet" href="assets/css/bootstrap.css">
        <script src="assets/js/lib/jquery.js"></script>
        <script src="assets/js/lib/datatables.js"></script>
        <script src="assets/js/lib/select2.js"></script>
        <script src="assets/js/lib/sweatalert.js"></script>
        <script src="assets/js/lib/bootstrap.js"></script>
        <script src="assets/js/login.js"></script>
    </head>
    
    <body>
        <?php include_once 'menu.php' ?>
    </body>
    
    </html>

<?php 
}else{
    echo "sem permissão!";
}

?>