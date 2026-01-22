//POST
function registaClube() {

    let dados = new FormData();
    dados.append("op", 1);
    dados.append("nome", $('#nome').val());
    dados.append("anoFundacao", $('#anoFundacao').val());
    dados.append("telefone", $('#telefone').val());
    dados.append("email", $('#email').val());
    dados.append("localidade", $('#localidade').val());

    $.ajax({
        url: "assets/controller/controllerClube.php",
        method: "POST",
        data: dados,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false
    })

        .done(function (msg) {

            let obj = JSON.parse(msg);
            if (obj.flag) {
                alerta("Clubes", obj.msg, "success");
                getListaClubes();
            } else {
                alerta("Clubes", obj.msg, "error");
            }

        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
}

function getListaClubes() {
    if ($.fn.DataTable.isDataTable('#tblClubes')) {
        $('#tblClubes').DataTable().destroy();
    }

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

        .done(function (msg) {
            console.log(msg);
            $('#listagemClubes').html(msg.clubes);
            $('#tblClubes').DataTable()
        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
}
function getListaClubes() {
    if ($.fn.DataTable.isDataTable('#tblClubes')) {
        $('#tblClubes').DataTable().destroy();
    }

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

        .done(function (msg) {
            console.log(msg);
            $('#listagemClubes').html(msg.clubes);
            $('#tblClubes').DataTable();
        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
}

function getListaJogadores() {

    if ($.fn.DataTable.isDataTable('#tblJogador')) {
        $('#tblJogador').DataTable().destroy();
    }

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

        .done(function (msg) {

            $('#listagemJogador').html(msg.jogadores);
            $('#tblJogador').DataTable();

        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
}
function removerClube(id) {

    let dados = new FormData();
    dados.append("op", 3);
    dados.append("id", id);

    $.ajax({
        url: "assets/controller/controllerClube.php",
        method: "POST",
        data: dados,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false
    })

        .done(function (msg) {

            let obj = JSON.parse(msg);
            if (obj.flag) {
                alerta("Clubes", obj.msg, "success");
                getListaClubes();
            } else {
                alerta("Clubes", obj.msg, "error");
            }

        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

}
function getDadosJogador(id) {


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

        .done(function (msg) {

            let obj = JSON.parse(msg);

            $('#numJogadorEdit').val(obj.num);
            $('#nomeJogadorEdit').val(obj.nome);
            $('#idadeJogadorEdit').val(obj.idade);
            $('#telefoneJogadorEdit').val(obj.tel);
            $('#emailJogadorEdit').val(obj.email);
            $('#clubeJogadorEdit').val(obj.idclube);
            $('#moradaEdit').val(obj.morada);



            $('#btnGuardar2').attr("onclick", "guardaEditJogador(" + obj.num + ")");

            $('#formEditJogador').modal('show');
        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


}

function guardaEditJogador(numOld) {

    let dados = new FormData();
    dados.append("op", 5);
    dados.append("numJogador", $('#numJogadorEdit').val());
    dados.append("nome", $('#nomeJogadorEdit').val());
    dados.append("idade", $('#idadeJogadorEdit').val());
    dados.append("telefone", $('#telefoneJogadorEdit').val());
    dados.append("email", $('#emailJogadorEdit').val());
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

        .done(function (msg) {

            let obj = JSON.parse(msg);
            if (obj.flag) {
                alerta("Jogador", obj.msg, "success");
                getListaJogadores();
                $('#formEditJogador').modal('hide')
            } else {
                alerta("Jogador", obj.msg, "error");
            }

        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


}
function getDadosClube(id) {


    let dados = new FormData();
    dados.append("op", 4);
    dados.append("id", id);

    $.ajax({
        url: "assets/controller/controllerClube.php",
        method: "POST",
        data: dados,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false
    })

        .done(function (msg) {

            let obj = JSON.parse(msg);
            $('#nomeEdit').val(obj.nome);
            $('#nmClube').html(obj.nome);
            $('#anoFundacaoEdit').val(obj.anoF);
            $('#telefoneEdit').val(obj.telefone);
            $('#emailEdit').val(obj.email);
            $('#localidadeEdit').val(obj.localidade);

            $('#btnGuardar').attr("onclick", "guardaEditClube(" + obj.id + ")")

            $('#formEditClube').modal('show')
        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


}

function guardaEditClube(id) {

    let dados = new FormData();
    dados.append("op", 5);
    dados.append("nome", $('#nomeEdit').val());
    dados.append("anoFundacao", $('#anoFundacaoEdit').val());
    dados.append("telefone", $('#telefoneEdit').val());
    dados.append("email", $('#emailEdit').val());
    dados.append("localidade", $('#localidadeEdit').val());
    dados.append("id", id);

    $.ajax({
        url: "assets/controller/controllerClube.php",
        method: "POST",
        data: dados,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false
    })

        .done(function (msg) {

            let obj = JSON.parse(msg);
            if (obj.flag) {
                alerta("Clube", obj.msg, "success");
                getListaClubes();
                $('#formEditClube').modal('hide')
            } else {
                alerta("Clube", obj.msg, "error");
            }

        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


}

function getSelectClubes() {

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

        .done(function (msg) {
            $('#clubeJogadorEdit').html(msg.selectClube);
            $('#clubeJogador').html(msg.selectClube);
        })

        .fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
}

function alerta(titulo, msg, icon) {
    Swal.fire({
        position: 'center',
        icon: icon,
        title: titulo,
        text: msg,
        showConfirmButton: true,

    })
}


$(function () {
    getListaClubes();
    getListaJogadores();
    getSelectClubes();
    $('#clubeJogadorEdit').select2({
        dropdownParent: $('#formEditJogador')
    });
});

