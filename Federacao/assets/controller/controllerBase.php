<?php

class ControllerBase {

    protected $model;

 public function __construct($model){
        $this->model = $model;
        $this->SistemaRequest();
    }

    protected  function SistemaRequest(){

        if(!isset($_POST['op'])) return "Resposta Invalida!";

        if($_POST['op'] == 1){
            echo $this->RegistarElemento();

        }else if($_POST['op'] == 2){
            echo $this->ListarElemento();

        }else if($_POST['op'] == 3){
            echo $this->EliminarElemento();

        }else if($_POST['op'] == 4){
            echo $this->BuscarElemento();

        }else if($_POST['op'] == 5){
            echo $this->UpdateElemento();

        }
    }

    protected function RegistarElemento(){}
    protected function ListarElemento(){}
    protected function EliminarElemento(){}
    protected function BuscarElemento(){}
    protected function UpdateElemento(){}

}