![Conpass](http://conpass.io/imagens/elementos/logo-2.png)

# Conpass - Desafio


Passo a passo para a instalação do zero dos servidores e aplicação:

[1. Instalação do MongoDB 3.4;](/instalandomongodb.md)
[2. Instalação da aplicação;](/instalandoaplicacao.md)
[3. Iniciar o WebService;](/iniciarwebservice.md)


## Vamos ao Desafio!

Hoje, na Conpass, temos diversos clientes, e para este desafio, iremos pegar dois como base para o nosso experimento.

O Joãozinho possui 4 fluxos que cobrem as 4 principais parte do seu sistema. Hoje, ele utiliza a Conpass para saber onde seus clientes estão parando, isto é, entendendo os pontos de atrito.

Já o Osny, possui um sistema modular com um total de 10 features independentes. Na Conpass, ele tem 15 fluxos, sendo um para cada feature e 5 de suporte. O Osny fica sempre de olho nos seus usuários e tenta entender o que cada um está fazendo, isto significa cada flow que o user fez e qual feature possui mais flow iniciando e finalizando.


Veja um exemplo com quatro documentos do mongo (eles estão separados, mas utilizam ref):

![modelo db](https://lh4.googleusercontent.com/iT1Dpdl9fz_hOUNMDi2rjlK03UT0Rg-uY4GY9yHJz6zOWll64p2fGmNnPj-6dRxtGQ1elUfTyNsxqA7SvcplOfMQtGgyDNFs-pQsKpE-FWOg0nEw7LfHePVc2i461_Ncvq7IJzNB)

Mas, qual é o objetivo?
Utilizando node, que resolva o problema dos dois clientes. Lembre-se que os dados podem ser processados, tendo um SLA de um dia (24hr) para serem atualizados. Tenha atenção com tempo de processamento, consumo de máquina, etc.
Os dados para popular a sua base de dados estão aqui:
https://s3.amazonaws.com/conpass-desafio/conpass_desafio.7z

Entregue o WOW. O que mais pode ser feito com esses dados?

Um pouco sobre a Conpass: cada ação que o usuário realiza deste iniciar um fluxo, iniciar um passo(step), concluir um fluxo e ou um passo, é salva uma atividade (activity). A partir das atividades conseguimos montar os relatórios.
