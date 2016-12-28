//servicos.js

angular.module("anguhello").service("eventoservice", function ($http){

  this.buscaeventos = () => $http.get("eventos");

  this.salvaevento = (ev) => $http.post("evento",ev);

});

angular.module("anguhello").service("participanteservice", function ($http){

  this.buscaparticipantes = () => $http.get("participantes");

  this.salvaparticipante = (ev) => $http.post("participante",ev);

});