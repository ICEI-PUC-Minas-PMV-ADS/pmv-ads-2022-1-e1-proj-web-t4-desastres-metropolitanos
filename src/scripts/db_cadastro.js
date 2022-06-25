var db_cadastro_inicial = {
    cadastros: [

        {
            "id": 1 ,
            "tipoNomeSobrenome" : "Ana Santos",
            "ruaCadastro" : "Belo Horizonte",
            "numeroCadastro": 123,
            "bairroCadastro" : "Centro",
            "cepCadastro" : "30100100",
            "emailCadastro" : "anasantos@gmail.com",
            "senha" : "123321",
            "cidadeCadastro" : "Belo Horizonte",
            "isAlerta": true,
        },

        {
        "id": 1 ,
        "tipoNomeSobrenome" : "Jose Maria",
        "ruaCadastro" : "Sao Paulo",
        "numeroCadastro": 123,
        "bairroCadastro" : "Centro",
        "cepCadastro" : "30100100",
        "emailCadastro" : "jose@gmail.com",
        "senha" : "123321",
        "cidadeCadastro" : "Belo Horizonte",
        "isAlerta": true,
    },
    {
        "id" : 2 ,
        "tipoNomeSobrenome": "Carlos Adv",
        "ruaCadastro": "Helium",
        "numeroCadastro": 200,
        "bairroCadastro": "Centro",
        "cepCadastro": "30100100",
        "emailCadastro" : "jose@gmail.com",
        "senha": "123321",
        "cidadeCadastro": "Central",
        "isAlerta": false,
    },
    {
        "id" : 3 ,
        "tipoNomeSobrenome": "Carla Maria",
        "ruaCadastro": "Contagem",
        "numeroCadastro": "123",
        "bairroCadastro": "California",
        "cepCadastro": "32300100",
        "emailCadastro": "cm12@gmail.com",
        "senha": "abc321",
        "cidadeCadastro": "Belo Horizonte",
        "isAlerta": false,
    },
    {
        "id" : 4 ,
        "tipoNomeSobrenome": "Jacquelyne Maria",
        "ruaCadastro": "Ceara",
        "numeroCadastro": "123",
        "bairroCadastro": "Centro",
        "cepCadastro": "33200200",
        "emailCadastro": "jm123@gmail.com",
        "senha": "123321",
        "cidadeCadastro": "Betim",
        "isAlerta": true,
    },
    ]
};

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_cadastro'));
if (!db) {
    db = db_cadastro_inicial
};

//funcao para dispar a alerta em caso de preenchimento incorreto
function displayMessage(msg) {
    alert(msg);
}

function insertCadastro(cadastro) {
    let novoId = 1;
    if (db.cadastros.length != 0 ) {
        novoId = db.cadastros[db.cadastros.length - 1].id + 1;
    }
    let novoCadastro = {
        "id": novoId ,
        "tipoNomeSobrenome" : cadastro.tipoNomeSobrenome,
        "ruaCadastro" : cadastro.ruaCadastro,
        "numeroCadastro": cadastro.numeroCadastro,
        "bairroCadastro" : cadastro.bairroCadastro,
        "cepCadastro" : cadastro.cepCadastro,
        "emailCadastro" : cadastro.emailCadastro,
        "senha" : cadastro.senha,
        "cidadeCadastro" : cadastro.cidadeCadastro,
        "isAlerta": cadastro.isAlerta,
    };

    // insere novo cadastro
    db.cadastros.push(novoCadastro);
    displayMessage("Cadastro inserido com sucesso")

    //Atualiza dados no local storage
    localStorage.setItem('db_cadastro', JSON.stringify(db))


}

