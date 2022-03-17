<h3>Deploy Heroku (Frontend)</h3>
<h5>Publicando projetos HTML, CSS e JavaScript no HEROKU</h5>
<h6>Passos para o deploy...</h6>

<h3>1) Criar um arquivo php, como index e incluir o arquivo html no projeto, fazendo com que ele seja encapsulado:</h3>

<h6>Exemplo: index.php( < ? php include_once("index.html"); ?>)</h6>


![php](https://user-images.githubusercontent.com/35885897/158030133-b00de94f-fd1e-4d50-86c0-c97bf49a311c.png)

  
<h3>2) Criar outro arquivo ao diretório raiz</h3>
  
<h6>Adicione um arquivo chamado composer.json ao diretório raiz, composer.json</h6>
<h6>Em composer.json , adicione a seguinte linha: { } </h6>
  
![compose](https://user-images.githubusercontent.com/35885897/158030567-281d5326-7786-4380-92dc-6b305dcd7baf.jpg)
  
  saber mais sobre o porquê desses arquivos. Aqui está dois artigos fala sobre <a href="https://www.dio.me/articles/publicando-projetos-htmljavascript-e-css-no-heroku">01artigo<a/>  <a href="https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489">02artigo<a/>  referências


<h3>OBS: deploy sem o arquivo compose.json</h3>
 
  <h6>Veja com o arquivo PHP ele detecta mas não o compose.json</h6>
 
![detect](https://user-images.githubusercontent.com/35885897/158030912-603148be-ee00-4b92-8f59-2737c183cd31.png)
  
  
<h2>depois de criar os arquivos, agora vamos fazer o deploy do frontend</h3>
  
  <h3>1) vá no site da HEROKU</h3>

 <h6>Agora clique em New e depois Create new app</h6>
 <h6>Coloque um nome único</h6>

<h3>2) depois do projeto criado e com o nome vamos fazer o deploy</h3>
  
  
 <h6> segue o passo a passo </h6>
  
 ![deploy hereku](https://user-images.githubusercontent.com/35885897/158031516-fb510cd9-c84e-44a7-9894-24b1021ca6e8.png)
  
  
  
  
  
<h1>Outra forma de deploy com static</h1>
<h3>buildpack projetado para hospedar conteúdo estático.</h3>
<h6>buildpacks:set https://github.com/heroku/heroku-buildpack-static.git</h6>
E adicione uma indicação de qual diretório contém seus ativos estáticos:static.json

{"root":"public"}
  
referência: Deploy static HTML, CSS and JS using Express <a href="https://www.youtube.com/watch?v=FnMglnp4rKI&ab_channel=sparxsys">Deploy static </a>

  
  
