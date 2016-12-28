angular.module("anguhello").controller("eventocontroller", function(eventoservice){

  this.novo = {};

  this.listar = () => eventoservice.buscaeventos().then( (ret) => {
    this.eventos = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvaevento = () => {
    eventoservice.salvaevento(this.novo).then( (ret) => {
      alert("evento salvo com id "+ret.data.idevento);
      this.listar();
      this.novo = {};
    });
  };
});

angular.module("anguhello").controller("participantescontroller", function(participanteservice){

  this.novo = {};

  this.listar = () => participanteservice.buscaparticipantes().then( (ret) => {
    this.participantes = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvaparticipante = () => {
    participanteservice.salvaparticipante(this.novo).then( (ret) => {
      alert("participante salvo com id "+ret.data.idparticipante);
      this.listar();
      this.novo = {};
    });
  };
});

// roteamento
angular.module("anguhello").config(($routeProvider) => {

  $routeProvider.when("/eventos", {
    controller:"eventocontroller",
    templateUrl:"eventos.html",
    controllerAs:"ctl"
  });

  $routeProvider.when("/participantes", {
    controller:"participantescontroller",
    templateUrl:"participantes.html",
    controllerAs:"ctl"
  });

  $routeProvider.otherwise("/eventos");

});