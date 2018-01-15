Para que a instalação ocorra sem problemas, são necessários as seguintes **condições**:

* Instância AWS Ubuntu Server 14.04 LTS, em execução;
* Acesso por SSH;
* Permissão de usuário/key necessária para instalação através do apt-get e atualização;
* Esteja na máquina pelo terminal usando SSH.
* Lembrando de liberar a porta 80. Exemplo e documentação especifica abaixo:

![Security Web Server on AWS](https://s3.us-east-2.amazonaws.com/lenines/c2fla/images/Captura+de+Tela+2017-11-11+às+18.25.05.png)
[Web Server on AWS](http://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/security-group-rules-reference.html)

**Passos:**

01 - O primeiro comando será para atualizar, use:  

`sudo apt-get update`

02 - Para baixar e instalar o Git, execute o seguinte comando:

`sudo apt-get install -y git`

03 - Baixo o projeto fazendo um clone do repositório com o seguinte comando:   

`git clone <LINK URL REPORSITORY github>`

04 - Acessa a pasta com o seguinte comando:

`cd ConpassDesafio/`

05 - Para instalar os frameworks: Nodejs, NPM, PM2, Express, Mongoose e body-parser, execute o seguinte comando:

`sh install.sh`

06 - Informe o IP privado, usuário e senha, para a aplicação encurtador de URL acessar o MongoDB, edite o arquivo keys/configdb.js, com o seguinte comando:

`sudo vi keys/configdb.js`

**Parabéns, finalizamos a fase de instalação e configuração do WebService.**
