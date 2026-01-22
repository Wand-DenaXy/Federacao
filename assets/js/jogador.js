function registaJogador(){

    let dados = new FormData();
    dados.append("op", 1);
    dados.append("numJogador", $('#numJogador').val());
    dados.append("nome", $('#nome').val());
    dados.append("idade", $('#idade').val());
    dados.append("telefone", $('#telefone').val());
    dados.append("email", $('#email').val());
    dados.append("morada", $('#morada').val());
    dados.append("clube", $('#clubeJogador').val());

    $.ajax({
    url: "assets/controller/controllerJogador.php",
    method: "POST",
    data: dados,
    dataType: "html",
    cache: false,
    contentType: false,
    processData: false
    })
    
    .done(function( msg ) {

        let obj = JSON.parse(msg);
        if(obj.flag){
            alerta("Jogador",obj.msg,"success");
            getListaJogadores();
        }else{
            alerta("Jogador",obj.msg,"error");    
        }
        
    })
    
    .fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });
}
function removerJogador(id){

    let dados = new FormData();
    dados.append("op", 3);
    dados.append("id", id);

    $.ajax({
    url: "assets/controller/controllerJogador.php",
    method: "POST",
    data: dados,
    dataType: "html",
    cache: false,
    contentType: false,
    processData: false
    })
    
    .done(function( msg ) {

        let obj = JSON.parse(msg);
        if(obj.flag){
            alerta("Clubes",obj.msg,"success");
            getListaJogadores();    
        }else{
            alerta("Clubes",obj.msg,"error");    
        }
        
    })
    
    .fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });

}

function getListaJogadores(){

    if ( $.fn.DataTable.isDataTable('#tblJogador') ) {
        $('#tblJogador').DataTable().destroy();
    }

    let dados = new FormData();
    dados.append("op", 2);


    $.ajax({
    url: "assets/controller/controllerJogador.php",
    method: "POST",
    data: dados,
    dataType: "html",
    cache: false,
    contentType: false,
    processData: false
    })
    
    .done(function( msg ) {

        $('#listagemJogador').html(msg);
        $('#tblJogador').DataTable();
        
    })
    
    .fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });
}

function getDadosJogador(id){


    let dados = new FormData();
    dados.append("op", 4);
    dados.append("num", id);

    $.ajax({
    url: "assets/controller/controllerJogador.php",
    method: "POST",
    data: dados,
    dataType: "html",
    cache: false,
    contentType: false,
    processData: false
    })
    
    .done(function( msg ) {

        let obj = JSON.parse(msg);

        $('#numJogadorEdit').val(obj.num);    
        $('#nomeEdit2').val(obj.nome);  
        $('#idadeEdit2').val(obj.idade);
        $('#telefoneEdit2').val(obj.tel);
        $('#emailEdit2').val(obj.email);
        $('#clubeJogadorEdit').val(obj.idclube);
        $('#moradaEdit').val(obj.morada);

        

       $('#btnGuardar').attr("onclick","guardaEditJogador("+obj.num+")");
        
       $('#formEditJogador').modal('show');
    })
    
    .fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });

    
}

function guardaEditJogador(numOld){

    let dados = new FormData();
    dados.append("op", 5);
    dados.append("numJogador", $('#numJogadorEdit').val());
    dados.append("nome", $('#nomeEdit2').val());
    dados.append("idade", $('#idadeEdit2').val());
    dados.append("telefone", $('#telefoneEdit2').val());
    dados.append("email", $('#emailEdit2').val());
    dados.append("clube", $('#clubeJogadorEdit').val());
    dados.append("morada", $('#moradaEdit').val());
    dados.append("numOld", numOld);

    $.ajax({
    url: "assets/controller/controllerJogador.php",
    method: "POST",
    data: dados,
    dataType: "html",
    cache: false,
    contentType: false,
    processData: false
    })
    
    .done(function( msg ) {

        let obj = JSON.parse(msg);
        if(obj.flag){
            alerta("Jogador",obj.msg,"success");
            getListaJogadores();
            $('#formEditJogador').modal('hide')    
        }else{
            alerta("Jogador",obj.msg,"error");    
        }
        
    })
    
    .fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });


}


function getSelectClubes(){

    let dados = new FormData();
    dados.append("op", 2);


    $.ajax({
    url: "assets/controller/controllerClube.php",
    method: "POST",
    data: dados,
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false
    })
    
    .done(function( msg ) {
        $('#clubeJogadorEdit').html(msg.selectClube); 
        $('#clubeJogador').html(msg.selectClube);  
    })
    
    .fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });
}


function alerta(titulo,msg,icon){
    Swal.fire({
        position: 'center',
        icon: icon,
        title: titulo,
        text: msg,
        showConfirmButton: true,

      })
}

function erroPermissao(){
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Sem permissão!",
        text: "Não pode aceder a este conteudo",
        showConfirmButton: true,

      })
}


$(function() {
    getListaJogadores();
    getSelectClubes();
    $('#clubeJogadorEdit').select2();

    $('#clubeJogadorEdit').select2({
        dropdownParent: $('#formEditJogador')
    });
});

