<?php
require_once 'controllerBase.php';
require_once '../model/modelClube.php';
session_start();

class ClubeController extends ControllerBase
{
    public function __construct(){              
        parent::__construct(new Clube());        
    }
    
    function RegistarElemento(){                 
        return $this->model->registaClube(
        $_POST['nome'],
        $_POST['anoFundacao'],
        $_POST['telefone'],
        $_POST['email'],
        $_POST['localidade']
        );
    }
function ListarElemento() {
    return json_encode([
        'clubes' => $this->model->getListaClubes(),
        'jogadores' => $this->model->getListaJogadores(),
        'selectClube' => $this->model->getSelectClubes()
    ]);
}
    function BuscarElemento(){                 
        return $this->model->getDadosClube($_POST['id']);
    }
    function EliminarElemento(){                 
        return $this->model->removeClube($_POST['id']);
    }
    function UpdateElemento(){                 
        return $this->model->guardaEditClube(            
            $_POST['nome'],
            $_POST['anoFundacao'],
            $_POST['telefone'],
            $_POST['email'],
            $_POST['localidade'],
            $_POST['id'],);
    }
}
new ClubeController();

?>