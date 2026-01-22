<?php

require_once 'connection.php';

class Clube{

    function registaClube($nome, $anoFundacao, $tel, $email, $localidade){

        global $conn;
        $msg = "";
        $flag = true;

            $sql = "INSERT INTO clubes (anoF, email, nome, localidade, telefone) VALUES ('".$anoFundacao."', '".$email."','".$nome."','".$localidade."','".$tel."')";

        if ($conn->query($sql) === TRUE) {
            $msg = "Registado com sucesso!";
        } else {
            $flag = false;
            $msg = "Error: " . $sql . "<br>" . $conn->error;
            $this -> wFicheiroError(date("Y-m-d H:i:s")." - ".$conn->error);
        }
          
       

        $resp = json_encode(array(
            "flag" => $flag,
            "msg" => $msg
        ));
          
        $conn->close();

        return($resp);

    }

function getListaClubes() {
        global $conn;
        $msg = "";
        $sql = "SELECT * FROM clubes";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $msg .= "<tr>";
                $msg .= "<th scope='row'>".$row['anoF']."</th>";
                $msg .= "<td>".$row['nome']."</td>";
                $msg .= "<td>".$row['email']."</td>";
                $msg .= "<td>".$row['telefone']."</td>";
                $msg .= "<td>".$row['localidade']."</td>";
                $msg .= "<td><button class='btn btn-warning' onclick ='getDadosClube(".$row['id'].")'><i class='fa fa-pencil'></i></button></td>";
                if($_SESSION['tipo']==1){
                    $msg .= "<td><button class='btn btn-danger' onclick ='removerClube(".$row['id'].")'><i class='fa fa-trash'></i></button></td>";
                } else {
                    $msg .= "<td>sem permissao</td>";
                }
                $msg .= "</tr>";
            }
        } else {
            $msg .= "<tr><td>Sem Registos</td><th scope='row'></th><td></td><td></td><td></td><td></td><td></td></tr>";
        }

        return ($msg);
    }
    function getListaJogadores(){

        global $conn;
        $msg = "";
        

        $sql = "SELECT jogadores.*, clubes.nome as clubeJogador FROM jogadores, clubes WHERE jogadores.idclube = clubes.id";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
 
            while($row = $result->fetch_assoc()) {
                $msg .= "<tr>";
                $msg .= "<th scope='row'>".$row['num']."</th>";
                $msg .= "<th scope='row'>".$row['nome']."</th>";
                $msg .= "<td>".$row['email']."</td>";
                $msg .= "<td>".$row['tel']."</td>";
                $msg .= "<td>".$row['morada']."</td>";
                $msg .= "<td>".$row['clubeJogador']."</td>";
                $msg .= "<td>".$row['idade']."</td>";
                $msg .= "<td><button class='btn btn-warning' onclick ='getDadosJogador(".$row['num'].")'><i class='fa fa-pencil'></i></button></td>";
                if($_SESSION['tipo'] == 1){
                    $msg .= "<td><button class='btn btn-danger' onclick ='removerJogador(".$row['num'].")'><i class='fa fa-trash'></i></button></td>";
                }else{
                    $msg .= "<td><button class='btn btn-secondary' onclick ='erroPermissao()'><i class='fa fa-trash'></i></button></td>";
                }
                $msg .= "</tr>";
            }
        } else {
            $msg .= "<tr>";
            $msg .= "<td>Sem Registos</td>";
            $msg .= "<th scope='row'></th>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "<td></td>";
            $msg .= "</tr>";
        }
        

        return ($msg);
    }
    function removeClube($id){
        global $conn;
        $msg = "";
        $flag = true;

        $sql = "DELETE FROM clubes WHERE id = ".$id;

        if ($conn->query($sql) === TRUE) {
            $msg = "Removido com Sucesso";
        } else {
            $flag = false;
            $msg = "Error: " . $sql . "<br>" . $conn->error;
        }

        $resp = json_encode(array(
            "flag" => $flag,
            "msg" => $msg
        ));
          
        $conn->close();

        return($resp);
    }

    function getDadosClube($id){
        global $conn;
        $msg = "";
        $row = "";

        $sql = "SELECT * FROM clubes WHERE id =".$id;
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // output data of each row
            $row = $result->fetch_assoc();
        }

        $conn->close();

        return (json_encode($row));

    }


    function guardaEditJogador($numJogador, $nome, $idade, $telefone, $email, $morada, $clube, $numOld){
        
        global $conn;
        $msg = "";
        $flag = true;
        $sql = "";


        $sql = "UPDATE jogadores SET num = '".$numJogador."',nome = '".$nome."', idade = '".$idade."',tel = '".$telefone."',email = '".$email."',morada = '".$morada."', idclube = '".$clube."' WHERE num =".$numOld;

        

        if ($conn->query($sql) === TRUE) {
            $msg = "Editado com Sucesso";
        } else {
            $flag = false;
            $msg = "Error: " . $sql . "<br>" . $conn->error;
        }

        $resp = json_encode(array(
            "flag" => $flag,
            "msg" => $msg
        ));
          
        $conn->close();

        return($resp);

    }

    function getSelectClubes(){
        global $conn;
        $msg = "<option selected>Escolha um Clube</option>";

        $sql = "SELECT id, nome FROM clubes";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // output data of each row
            while($row = $result->fetch_assoc()) {
                $msg .= "<option value='".$row['id']."'>".$row['nome']."</option>"; 
            }
        } else {
            $msg = "<option value='-1'>Sem Clubes registados</option>"; 

        }
        $conn->close();

        return ($msg);
    }


}


?>