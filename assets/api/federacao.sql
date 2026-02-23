Create database federacao;

use federacao;

CREATE TABLE clubes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    telefone VARCHAR(20),
    localidade VARCHAR(100),
    anoF varchar(100),
    foto VARCHAR(255)
);
CREATE TABLE jogadores (
    num INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    idade INT CHECK (idade >= 0),
    morada VARCHAR(200),
    tel VARCHAR(20),
    foto VARCHAR(255),
    idclube INT,
	FOREIGN KEY (idclube) REFERENCES clubes(id)
);
CREATE TABLE tipouser (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);
INSERT INTO tipouser (descricao) VALUES
('Admin'),
('Jogador'),
('Gestor');
CREATE TABLE utilizador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(50) NOT NULL UNIQUE,
    pw VARCHAR(255) NOT NULL,
    idtpuser INT NOT NULL,
    foto VARCHAR(255),
	FOREIGN KEY (idtpuser) REFERENCES tipouser(id)
);