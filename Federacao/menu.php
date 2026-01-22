<div class="container mt-5">
    <h2>Nome de Utilizador</h2>
    <h3><?php echo($_SESSION['utilizador']);?></h3>
    <img class="img-thumbnail img-size" src="<?php echo($_SESSION['foto']);?>">
</div>

<div class="container mt-5">
    <button type="button" class="btn btn-info" onclick="logout()">logout</button>
    <a class="btn btn-success" href="main.php" role="button">Home</a>
    <a class="btn btn-success" href="clube.php" role="button">Clubes</a>
    <a class="btn btn-success" href="jogador.php" role="button">Jogadores</a>
</div>