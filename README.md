# Demo Palestra: Ganhe mais Produtividade Criando Projetos Serverless com Visual Studio Code & Node.js 

[![Screen-Shot-08-18-19-at-03-22-PM.png](https://i.postimg.cc/Kc73Z3Qw/Screen-Shot-08-18-19-at-03-22-PM.png)](https://postimg.cc/4ndxPdDQ)

Repositório responsável pela demo do evento: **[[Brazil] Microsoft Tech on the Road @ SENAC (POA – RS)](https://www.meetup.com/pt-BR/Microsoft-Student-Partners-Latam/events/263649450/)**

## Recursos Utilizados 🚀

- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=senacpoa-github-gllemos)**
- **[Node.js](https://nodejs.org/en/)**
- **[Extensão Visual Studio Code: Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=senacpoa-github-gllemos)**
- **[Conta Azure - Conta Gratuita](https://azure.microsoft.com/free/?WT.mc_id=senacpoa-github-gllemos)**

## Conta - Azure for Students ⭐️

Caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=senacpoa-github-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=senacpoa-github-gllemos)**

## Sobre a Demo 💻

- **demo-1**: aqui eu ensino como fazer o famoso 'HelloWorld' com Node.js & Azure Functions. Após a criação, iremos realizar o deploy no Visual Studio Code direto para a nuvem!

## Executando localmente a aplicação

1. Para executar localmente a aplicação precisa primeiramente baixar o pacote npm do azure function tools globalmente na sua máquina por meio do comando:

```bash
> npm i -g azure-functions-core-tools --unsafe-perm true
```

2. Feito isso, vai até a pasta da demo em: `demo-1`

3. Agora, abre novamente o seu prompt de comando e execute o comando:

```bash
> func host start
```

Abre a browser em: `http://localhost:7071/api/students` e pronto! Executará o seu primeiro HTTP Trigger no browser!

## Links & Recursos Importantes ❗️

Durante a live, comentei sobre importantes documentações, links e recursos que podem auxiliar o seu conhecimento sobre Serverless & Azure Functions

- ✅ **[Link dos Slides da Palestra](https://aka.ms/AA5u7ek)**
- ✅ **[Azure para devs JavaScript & Node.js](https://docs.microsoft.com/pt-br/javascript/azure/?WT.mc_id=senacpoa-github-gllemos&view=azure-node-latest)**
- ✅ **[Documentação Azure Functions](https://docs.microsoft.com/pt-br/azure/azure-functions/?WT.mc_id=senacpoa-github-gllemos)**
- ✅ **[Criando a sua Primeira Função no Visual Studio Code](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=senacpoa-github-gllemos)**
- ✅ **[Extensão Vs Code – Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=senacpoa-github-gllemos)**
- ✅ **[E-Book Grátis - Azure Serverless Computing Cookbook](https://azure.microsoft.com/pt-br/resources/azure-serverless-computing-cookbook/?WT.mc_id=senacpoa-github-gllemos)**
- ✅ **[Cursos Grátis - Azure Functions](https://docs.microsoft.com/pt-br/learn/paths/create-serverless-applications/?WT.mc_id=senacpoa-github-gllemos)**