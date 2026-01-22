<?php
require_once 'controllerBase.php';
require_once '../model/modelJogador.php';
session_start();

class JogadorController extends ControllerBase
{
    public function __construct(){              
        parent::__construct(new Jogador());        
    }
    
    function RegistarElemento(){                 
        return $this->model->registaJogador(
        $_POST['numJogador'],
        $_POST['nome'],
        $_POST['idade'],
        $_POST['telefone'],
        $_POST['email'],
        $_POST['morada'],
        $_POST['clube']
        );
    }
function ListarElemento() {
    return $this->model->getListaJogadores();
}
    function BuscarElemento(){                 
        return $this->model->getDadosJogador($_POST['num']);
    }
    function EliminarElemento(){                 
        return $this->model->removerJogador($_POST['id']);
    }
    function UpdateElemento(){                 
        return $this->model->guardaEditJogador(
        $_POST['numJogador'],
        $_POST['nome'],
        $_POST['idade'],
        $_POST['telefone'],
        $_POST['email'],
        $_POST['morada'],
        $_POST['clube'],
        $_POST['numOld']
        );
    }
}
new JogadorController();

?>