document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e){
    var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilme(filmePesquisa);
    e.preventDefault()
}
function buscarFilme(filmePesquisa){
    axios.get('https://api.tvmaze.com/search/shows?q=' + filmePesquisa)
  .then(function (response) {
    console.log(response);
    var filmes =response.data;
    var mostrarFilmes = '';

    for(var i = 0; i < filmes.length;i++){
        mostrarFilmes += `<div class ="1" id="E">
            <div class="tumb">
            <img src="${filmes[i].show.image}" class="img">
            <h3>${filmes[i].show.name}</h3>
            <p> <a href="${filmes[i].show.url}" class="link" role="button" onclick="filmeDetalhes(
                '${filmes[i].show.externals.imdb || filmes[i].show.id }' 
            )"> Ver detalhes </p>
            </div>
        
        </div>`;
    }
        document.getElementById('filmes').innerHTML = mostrarFilmes;
  })
  
}
/*

//parte para exibir o conteúdo ver mais..


function filmeDetalhes(id){
    sessionStorage.setItem('filmeId',id);
    console.log(id)
    this.window.location = 'detalhes.html';
    return false;
}


function mostraFilme(){
    var filmeId = sessionStorage.getItem('filmeId');

    if(show.id){    axios.get('https://api.tvmaze.com/lookup/shows?tvrage=' + filmeId)
    .then(function (response) {
        var filme = response.data;
        console.log(filme)
    
    })
    
    }else{
        axios.get('https://api.tvmaze.com/shows/1?embed=' + filmeId)
        .then(function (response) {
            var filme = response.data;
            console.log(filme)
        
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })

    }
}
    <img src="${filmes[i].show.image.original}" class="img">
<img src="${filmes[i].show.original}" class="img">
            
*/