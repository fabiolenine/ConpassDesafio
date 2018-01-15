# Instalação do MongoDB 3.4, passo a passo:

Para que a instalação ocorra sem problemas, são necessários as seguintes **condições**:

* Instância AWS Ubuntu Server 14.04 LTS, em execução;
* Acesso por SSH;
* Permissão de usuário/key necessária para instalação através do apt-get e atualização;
* Esteja na máquina pelo terminal usando SSH;
* Lembrando de liberar as portas de conexão do MongoDB, para o grupo ID da instância da aplicação ConPass, em NetWork & Security -> Security Groups -> Edit inbound rules. Exemplo e documentação especifica abaixo:

![Security Mongodb on AWS](http://docs.aws.amazon.com/quickstart/latest/mongodb/images/inbound-rules.png)
[MongoDB on AWS](http://docs.aws.amazon.com/quickstart/latest/mongodb/security.html)

**Passos:**

01 - Execute o comando abaixo para importar a chave pública usada pelo sistema de gerenciamento de pacotes:

`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6`

02 - Crie um arquivo executando o comando abaixo:

`echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`

03 - Para atualizar, use:  

`sudo apt-get update`

04 - Para instalar o MongoDB, execute o comando:

`sudo apt-get install -y mongodb-org`

05 - Acesse o arquivo mongodb.conf com o editor Vi, usando o comando:

`sudo vi /etc/mongod.conf`

06 - Comentar a seguinte linha:

`bind_Ip = 127.0.0.1` -> `#bind_Ip = 127.0.0.1`

07 - Acesse o MongoDB e execute os seguintes comandos:

`mongo`

08 - Para ativar todas as alterações reinicie o serviço do MongoDB com o comando a seguir:

`sudo service mongod stop`

`sudo mongod --fork --auth --quiet --config /etc/mongod.conf`

09 - Vamos editar o crontab para que o MongoDB retorne caso a instância seja reiniciada, execute o comendo abaixo:

`sudo crontab -e`

 10 - Adicione esta linha ao arquivo:

`@reboot sudo mongod --fork --auth --quiet --config /etc/mongod.conf`

**Parabéns, finalizamos a fase de instalação e configuração do banco de dados.**
