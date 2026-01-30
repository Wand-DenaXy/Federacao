# Federação – Relatório do Projeto

## Descrição

O projeto **Federação** consiste numa aplicação web desenvolvida em **PHP**, baseada na arquitetura **MVC (Model–View–Controller)**, destinada à gestão de clubes, jogadores e utilizadores.

A aplicação permite o registo, edição, listagem e remoção de clubes e jogadores, bem como a autenticação e controlo de acessos dos utilizadores, garantindo uma separação clara de responsabilidades entre as camadas do sistema.

### O projeto foi desenvolvido com foco em:

- Reutilização através de herança  
- Operações CRUD assíncronas  
- Boas práticas de Programação Orientada a Objectos  
- Experiência de utilização moderna e responsiva  

**Linguagem:** PHP  
**Arquitetura:** MVC (Model–View–Controller)  
**Base de Dados:** MySQL (via PDO)  
**Frontend:** HTML, CSS, JavaScript  
**Bibliotecas:** Bootstrap, jQuery, DataTables, Select2, SweetAlert2  

---

## **Arquitetura Geral**
```

┌──────────────────────────┐
│          Views           │  ← Interface do utilizador
│ (HTML, CSS, JS, AJAX)    │
└─────────────┬────────────┘
              │
              ▼
┌──────────────────────────┐
│       Controllers        │  ← Lógica de controlo
│ (ControllerBase, etc.)   │
└─────────────┬────────────┘
              │
              ▼
┌──────────────────────────┐
│          Models          │  ← Lógica de negócio e BD
│ (PDO / MySQL)            │
└──────────────────────────┘
```

## **ControllerBase – Nova Funcionalidade Aprendida**

O ` ControllerBase ` representa um dos principais pontos de aprendizagem do projeto, funcionando como classe abstrata base para os restantes controladores.

**Características**

- Classe abstrata para padronização dos controladores

- Centralização das operações CRUD (Create, Read, Update, Delete)

- Aplicação de herança nos controladores `ControllerClube` e `ControllerJogador`

- Aplicação prática de Programação Orientada a Objectos (POO) em PHP

- Redução de código duplicado e melhoria da manutenção do sistema



## **Gestão de Utilizadores**

O sistema inclui um módulo de autenticação e controlo de acessos, garantindo segurança e restrição de funcionalidades conforme o perfil do utilizador.

**Funcionalidades**

- Autenticação de utilizadores com sessões PHP

- Suporte a diferentes tipos de utilizador

- Prevenção de acesso não autorizado a áreas restritas


## **Gestão de Clubes e Jogadores**

A aplicação permite a gestão completa de clubes e jogadores através de uma interface intuitiva e interactiva.

**Operações Disponíveis**

Registo de novos clubes e jogadores

Edição de registos existentes

Listagem dinâmica de dados

Remoção de registos

**Tecnologias Utilizadas**

- Operações CRUD realizadas via AJAX

- Tabelas interactivas com DataTables

- Campos de selecção avançada com Select2

- Feedback visual ao utilizador com SweetAlert2

- Interface responsiva desenvolvida com Bootstrap



## Fluxo de Funcionamento (Exemplo CRUD)

- O utilizador interage com a View

- É enviado um pedido AJAX para o Controller

- O Controller valida os dados recebidos

- O Controller comunica com o Model

- O Model executa as operações na base de dados

- O Controller devolve a resposta

- A View apresenta o feedback ao utilizador


## Estrutura do Projeto

```
/federacao/
├── README.md                            
│   # Documentação e relatório do projecto
│
├── src/
│   ├── controller/
│   │   ├── controllerBase.php           
│   │   # Controlador base (Coração do Projeto)
│   │
│   │   ├── ControllerClube.php           
│   │   # Controlador responsável pela gestão de clubes
│   │
│   │   ├── ControllerJogador.php         
│   │   # Controlador responsável pela gestão de jogadores
│   │
│   │   └── ControllerLogin.php           
│   │       # Controlador de gestão de sessões de utilizador
│   │
│   ├── css/
│   │   ├── bootstrap.css                 
│   │   # Estilos base da interface (layout e componentes visuais)
│   │
│   │   ├── datatables.css                
│   │   # Estilos para tabelas dinâmicas
│   │
│   │   └── select2.css                   
│   │       # Estilos para campos de selecção avançada
│   │ 
│   ├── imagens/
│   │   ├── clube/
│   │   │   └── clube20240626111548.jpeg  
│   │   │   # Imagens associadas aos clubes
│   │   │
│   │   └── user/
│   │       └── user.webp                 
│   │       # Imagens associadas aos utilizadores
│   │   
│   ├── js/
│   │   ├── lib/
│   │   │   ├── bootstrap.js              
│   │   │   # Biblioteca JavaScript Bootstrap
│   │   │
│   │   │   ├── datatables.js             
│   │   │   # Biblioteca JavaScript DataTables
│   │   │
│   │   │   ├── jquery.js                 
│   │   │   # Biblioteca JavaScript jQuery
│   │   │
│   │   │   ├── select2.js                
│   │   │   # Biblioteca JavaScript Select2
│   │   │
│   │   │   └── sweetalert.js             
│   │   │       # Biblioteca JavaScript SweetAlert2
│   │   │
│   │   ├── clube.js                      
│   │   # JavaScript da View de clubes (AJAX e interacções com a interface)
│   │
│   │   ├── jogador.js                    
│   │   # JavaScript da View de jogadores
│   │
│   │   └── login.js                      
│   │       # JavaScript da View de autenticação
│   │
│   ├── model/
│   │   ├── connection.php                
│   │   # Modelo responsável pela ligação à base de dados (PDO / MySQL)
│   │
│   │   ├── modelClube.php                
│   │   # Modelo com a lógica de negócio e operações sobre clubes
│   │
│   │   ├── modelJogador.php              
│   │   # Modelo com a lógica de negócio e operações sobre jogadores
│   │
│   │   └── modelLogin.php                
│   │       # Modelo responsável pela autenticação e gestão de utilizadores
│   │
│   ├── clube.php                         
│   │   # View: página de gestão de clubes
│   │
│   ├── jogador.php                       
│   │   # View: página de gestão de jogadores
│   │
│   ├── main.php                          
│   │   # View: layout principal da aplicação (dashboard)
│   │
│   ├── menu.php                          
│   │   # View: menu de navegação da aplicação
│   │
│   └── index.html                        
│       # View inicial da aplicação

```
### Principais Decisões Técnicas

**Decisão:** Utilização do padrão MVC.

**Justificação:**

- Melhor organização do código

- Separação clara de responsabilidades

- Facilidade de manutenção e evolução

- Utilização de AJAX

**Decisão:** Implementação das operações CRUD de forma assíncrona.

**Justificação:**

- Evita recarregamentos desnecessários da página

- Melhora a experiência do utilizador

- Comunicação mais eficiente entre frontend e backend

## **Utilização de PDO**

Decisão: Utilização de PDO para acesso à base de dados.

**Justificação:**

- Maior segurança contra SQL Injection

- Código mais limpo e reutilizável

- Suporte a prepared statements


## Autor

- [Manuel Silvestre]((https://github.com/Wand-DenaXy))
